import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';
import { icons } from '../../../components';

export default
@injectable()
class RomanNumeral extends Tools {
  title = 'Toggle roman numeral';
  icon = icons.roman_numeral;
  name = 'RomanNumeral';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.roman_numeral)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.roman_numeral)(state);
    };
  }
}
