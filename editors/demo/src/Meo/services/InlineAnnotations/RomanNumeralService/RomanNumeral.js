// import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';
import { icons } from '../../../components';
import { DocumentHelpers } from 'wax-prosemirror-utilities';
import commands from '../../../commands/commands';

// modified from wax-prosemirror-services/src/TransformService/TransformTool.js
function markAsRomanNumeral(state, dispatch) {
  // grab the current transaction and selection
  let { tr } = state;
  const { selection } = tr;
  const marksAdd = [];

  state.doc.nodesBetween(selection.from, selection.to, (node, position, parent, index) => {
    if (node.marks.length > 0) {
      node.marks.forEach(item => {
        marksAdd.push({
          name: item.type.name,
          type: item.type,
          pos: DocumentHelpers.findMark(state, item.type, true),
          attrs: item.attrs,
        });
      });
    }

    // we only processing text, must be a selection
    if (!node.isTextblock || selection.from === selection.to) return;

    // calculate the section to replace
    const startPosition = Math.max(position + 1, selection.from);
    // const endPosition = Math.min(position + node.nodeSize, selection.to);

    // grab the content
    const substringFrom = Math.max(0, selection.from - position - 1);
    const substringTo = Math.max(0, selection.to - position - 1);
    const selectedText = node.textBetween(substringFrom, substringTo);

    const rnMark = state.config.schema.marks.roman_numeral.instance;
    // in selected text, uppercase and mark as roman numerals only roman figures
    selectedText.replace(/([cdilmvxCDILMVX]+)/g, (m, rn, offset) => {
      const startPos = startPosition + offset;
      const endPos = startPos + rn.length;
      tr = tr.replaceWith(startPos, endPos, state.schema.text(rn.toUpperCase()));
      tr = tr.addMark(startPos, endPos, rnMark);
    });
  });

  marksAdd.forEach(item => {
    item.pos.forEach(markPos => {
      tr.addMark(markPos.from, markPos.to, item.type.create(item.attrs));
    });
  });
  dispatch(tr.scrollIntoView());
};

export default
@injectable()
class RomanNumeral extends Tools {
  title = 'Toggle roman numeral';
  icon = icons.roman_numeral;
  name = 'RomanNumeral';

  get run() {
    return (state, dispatch) => {
      // toggleMark(state.config.schema.marks.roman_numeral)(state, dispatch);
      const { empty } = state.selection;
      if ( !empty ) {
        markAsRomanNumeral(state, dispatch);
      } else {
        commands.removeMarkAtSelection(state, state.config.schema.marks.roman_numeral.instance)(state, dispatch);
      }
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.roman_numeral)(state);
    };
  }
}
