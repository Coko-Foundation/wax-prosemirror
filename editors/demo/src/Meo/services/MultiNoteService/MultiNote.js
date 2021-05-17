import { Tools } from 'wax-prosemirror-services';
import { injectable } from 'inversify';
import { Fragment } from 'prosemirror-model';
import { v4 as uuidv4 } from 'uuid';

export default
@injectable()
class MultiNote extends Tools {
  title = 'Insert MultiNote';
  icon = 'note';
  name = 'MultiNote';

  get run() {
    return (state, dispatch) => {
      const { empty, $from, $to } = state.selection;
      let content = Fragment.empty;
      if (!empty && $from.sameParent($to) && $from.parent.inlineContent)
        content = $from.parent.content.cut(
          $from.parentOffset,
          $to.parentOffset,
        );
      const multinote = state.config.schema.nodes.multinote.create(
        { id: uuidv4() },
        content,
      );
      dispatch(state.tr.replaceSelectionWith(multinote));
    };
  }

  select = (state, activeViewId) => {
    if (activeViewId !== 'main') return false;
    return true;
  };

  get enable() {
    return state => {
      return false;
    };
  }
}
