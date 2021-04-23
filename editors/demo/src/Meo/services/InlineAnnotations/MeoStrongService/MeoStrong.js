import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';
import { icons } from '../../../components';
import commands from '../../../commands/commands';

export default
@injectable()
class Strong extends Tools {
  title = 'Toggle MEO strong emphasis';
  icon = icons.strong;
  name = 'Strong';

  get run() {
    return (state, dispatch) => {
      // toggleMark(state.config.schema.marks.strong)(state, dispatch);
      commands.toggleMarkAtSelection(state, state.config.schema.marks.strong.instance)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.strong)(state);
    };
  }
}
