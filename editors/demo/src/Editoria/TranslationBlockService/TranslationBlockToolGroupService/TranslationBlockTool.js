import { injectable } from 'inversify';
import { Fragment } from 'prosemirror-model';
import { findWrapping } from 'prosemirror-transform';
import { TextSelection } from 'prosemirror-state';
import { wrapIn } from 'prosemirror-commands';
import { v4 as uuidv4 } from 'uuid';
import { Tools, Commands } from 'wax-prosemirror-core';

@injectable()
class TranslationBlockTool extends Tools {
  title = 'Add Translation Block';
  label = 'TranslationBlockTool';
  name = 'TranslationBlockTool';

  get run() {
    return (state, dispatch) => {
      // checkifEmpty(main);
      // const { tr } = state;
      // const { $from, $to } = state.selection;
      // const range = $from.blockRange($to);

      wrapIn(state.config.schema.nodes.translation_block)(state, dispatch);
      // const wrapping =
      //   range &&
      //   findWrapping(range, state.config.schema.nodes.translation_block, {
      //     id: uuidv4(),
      //   });
      // if (!wrapping) return false;
      // tr.wrap(range, wrapping);

      // const map = tr.mapping.maps[0];
      // let newPos = 0;
      // map.forEach((_from, _to, _newFrom, newTo) => {
      //   newPos = newTo;
      // });

      // tr.setSelection(TextSelection.create(tr.doc, range.$to.pos));
      // const option = state.config.schema.nodes.translation_block.create(
      //   { id: uuidv4() },
      //   Fragment.empty,
      // );

      // tr.replaceSelectionWith(option);
      // dispatch(tr);
      // return true;
    };
  }

  get active() {
    return state => {
      if (
        Commands.isParentOfType(
          state,
          state.config.schema.nodes.translation_block,
        )
      ) {
        return true;
      }
      return false;
    };
  }

  select = (state, activeViewId, activeView) => {
    const { disallowedTools } = activeView.props;
    let status = true;
    const { from, to } = state.selection;
    if (from === null || disallowedTools.includes('TranslationBlock')) return false;

    state.doc.nodesBetween(from, to, (node, pos) => {
      if (node.type.groups.includes('translations')) {
        status = false;
      }
    });
    return status;
  };
}
export default TranslationBlockTool;
