import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';
import { icons } from '../../../components';
import commands from '../../../commands/commands';

export default
@injectable()
class Strong extends Tools {
  title = 'Toggle MEO stronger emphasis';
  icon = icons.stronger;
  name = 'Stronger';

  get run() {
    return (state, dispatch) => {
      // toggleMark(state.config.schema.marks.stronger)(state, dispatch);
      commands.toggleMarkAtSelection(state, state.config.schema.marks.stronger.instance)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.stronger)(state);
    };
  }
}
