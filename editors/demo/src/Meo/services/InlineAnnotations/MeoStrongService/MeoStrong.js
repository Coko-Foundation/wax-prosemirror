import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';

export default
@injectable()
class Strong extends Tools {
  title = 'Toggle MEO strong emphasis';
  icon = 'strong'; // TODO: create proper icon
  name = 'MeoStrong';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.strong)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.strong)(state);
    };
  }
}
