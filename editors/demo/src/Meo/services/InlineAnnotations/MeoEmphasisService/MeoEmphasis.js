import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';

export default
@injectable()
class MeoEmphasis extends Tools {
  title = 'Toggle MEO emphasis';
  icon = 'italic'; // TODO: create proper icon
  name = 'Emphasis';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.em)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.em)(state);
    };
  }
}
