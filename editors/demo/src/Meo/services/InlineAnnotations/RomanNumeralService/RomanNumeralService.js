import { toggleMark } from 'prosemirror-commands';
import { emphasisMark } from 'wax-prosemirror-schema';
import RomanNumeral from './RomanNumeral';
import { Service } from "wax-prosemirror-services";
import RomanNumeralMark from './RomanNumeralMark';

class RomanNumeralService extends Service {
  boot() {
    // const shortCuts = this.container.get('ShortCuts');
    // shortCuts.addShortCut({ 'Mod-i': toggleMark(this.schema.marks.em) });
  }

  register() {
    this.container.bind('RomanNumeral').to(RomanNumeral);
    const createMark = this.container.get('CreateMark');
    createMark(
      {
        roman_numeral: RomanNumeralMark,
      },
      { toWaxSchema: true },
    );
  }
}

export default RomanNumeralService;
