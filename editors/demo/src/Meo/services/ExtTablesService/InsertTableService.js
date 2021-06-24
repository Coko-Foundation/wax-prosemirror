import { Service } from 'wax-prosemirror-services';
import { tableNodes, goToNextCell } from 'prosemirror-tables';
import Table from './Table';

// from prosemirror sources
function getCellAttrs(dom, extraAttrs) {
  let widthAttr = dom.getAttribute("data-colwidth")
  let widths = widthAttr && /^\d+(,\d+)*$/.test(widthAttr) ? widthAttr.split(",").map(s => Number(s)) : null
  let colspan = Number(dom.getAttribute("colspan") || 1)
  let result = {
    colspan,
    rowspan: Number(dom.getAttribute("rowspan") || 1),
    colwidth: widths && widths.length == colspan ? widths : null
  }
  for (let prop in extraAttrs) {
    let getter = extraAttrs[prop].getFromDOM
    let value = getter && getter(dom)
    if (value != null) result[prop] = value
  }
  return result
}

function tableCellContainsBlocks( dom ) {
  console.log( dom );
  if ( dom.getElementsByTagName ) return dom.getElementsByTagName('div').length + dom.getElementsByTagName('p').length > 0;
  return false;
}

class InsertTableService extends Service {
  boot() {
    const shortCuts = this.container.get('ShortCuts');
    shortCuts.addShortCut({
      Tab: goToNextCell(1),
      'Shift-Tab': goToNextCell(-1),
    });
  }

  register() {
    this.container.bind('Table').to(Table);
    const extraAttrs = {
      halign: {
        default: null,
        getFromDOM: dom => dom.style['text-align'],
        setDOMAttr: ( halign, attrs ) => {
          let style = attrs.style || '';
          style += `; text-align: ${halign}`;
          attrs.style = style;
        }
      },
      valign: {
        default: null,
        getFromDOM: dom => dom.style['vertical-align'],
        setDOMAttr: ( valign, attrs ) => {
          let style = attrs.style || '';
          style += `; vertical-align: ${valign}`;
          attrs.style = style;
        }
      }
    };
    const { table, table_row, table_cell, table_header } = tableNodes({
      tableGroup: 'block',
      cellContent: 'block+',
      cellAttributes: extraAttrs,
    });

    const table_cell_inline = { ...table_cell };
    table_cell_inline.content = 'text*';
    table_cell_inline.parseDOM = [
      {
        tag: "td",
        getAttrs: dom => ! tableCellContainsBlocks(dom) ? getCellAttrs(dom, extraAttrs) : false
      }
    ];
    table_cell.parseDOM = [
      {
        tag: "td",
        getAttrs: dom => tableCellContainsBlocks(dom) ? getCellAttrs(dom, extraAttrs) : false
      }
    ];
    table_row.content = '(table_cell | table_cell_inline | table_header)*';

    const createNode = this.container.get('CreateNode');

    createNode({
      table,
    });
    createNode({
      table_row,
    });
    createNode({
      table_cell,
    });
    createNode({
      table_cell_inline,
    });
    createNode({
      table_header,
    });
  }
}

export default InsertTableService;
