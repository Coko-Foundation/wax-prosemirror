import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';

export default
@injectable()
class Acronym extends Tools {
  title = 'Toggle acronym';
  icon = 'italic'; // TODO: create proper icon
  name = 'Acronym';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.acronym)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.acronym)(state);
    };
  }
}
