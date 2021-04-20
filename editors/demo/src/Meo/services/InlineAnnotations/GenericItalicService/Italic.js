import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';

export default
@injectable()
class Italic extends Tools {
  title = 'Toggle italic';
  icon = 'italic';
  name = 'Italic';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.i)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.i)(state);
    };
  }
}
