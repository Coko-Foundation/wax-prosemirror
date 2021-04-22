import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';
import { icons } from '../../../components';

export default
@injectable()
class Strong extends Tools {
  title = 'Toggle MEO stronger emphasis';
  icon = icons.stronger;
  name = 'Stronger';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.stronger)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.stronger)(state);
    };
  }
}
