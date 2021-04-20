import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { Tools } from 'wax-prosemirror-services';
import { injectable } from 'inversify';

export default
@injectable()
class Bold extends Tools {
  title = 'Toggle bold';
  icon = 'bold';
  name = 'Bold';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.bold)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.bold)(state);
    };
  }
}
