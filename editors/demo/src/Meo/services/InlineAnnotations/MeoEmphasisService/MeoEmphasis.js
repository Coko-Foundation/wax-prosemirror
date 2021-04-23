import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';
import { icons } from '../../../components';
import commands from '../../../commands/commands';

export default
@injectable()
class MeoEmphasis extends Tools {
  title = 'Toggle MEO emphasis';
  icon = icons.emphasis;
  name = 'Emphasis';

  get run() {
    return (state, dispatch) => {
      // toggleMark(state.config.schema.marks.em)(state, dispatch);
      commands.toggleMarkAtSelection(state, state.config.schema.marks.em.instance)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.em)(state);
    };
  }
}
