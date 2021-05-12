import { Service } from 'wax-prosemirror-services';
import { tableNodes, goToNextCell } from 'prosemirror-tables';
import Table from 'wax-prosemirror-services/src/TablesService/InsertTableService/Table';

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

    const { table, table_row, table_cell, table_header } = tableNodes({
      tableGroup: 'block',
      cellContent: 'block+',
      cellAttributes: {
        halign: {
          default: null,
          getFromDOM: dom => dom.style['text-align'],
// dom.getAttribute('style').replace(/^.*?\btext-align:\s*(left|center|right|justify)\b.*$/, '$1');
          setDOMAttr: ( halign, attrs ) => {
            let style = attrs.style || '';
            style += `; text-align: ${halign}`;
            attrs.style = style;
          }
        },
        valign: {
          default: null,
          // getFromDOM: dom => dom.getAttribute('style').replace(/^.*?\bvertical-align:\s*(top|middle|bottom)\b.*$/, '$1'),
          getFromDOM: dom => dom.style['vertical-align'],
          setDOMAttr: ( valign, attrs ) => {
            let style = attrs.style || '';
            style += `; vertical-align: ${valign}`;
            attrs.style = style;
          }
        },
      }
    });
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
      table_header,
    });
  }
}

export default InsertTableService;
