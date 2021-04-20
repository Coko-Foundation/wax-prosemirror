import { toggleMark } from 'prosemirror-commands';
import { emphasisMark } from 'wax-prosemirror-schema';
import Acronym from './Acronym';
import { Service } from "wax-prosemirror-services";
import AcronymMark from './AcronymMark';

class AcronymService extends Service {
  boot() {
    // const shortCuts = this.container.get('ShortCuts');
    // shortCuts.addShortCut({ 'Mod-i': toggleMark(this.schema.marks.em) });
  }

  register() {
    this.container.bind('Acronym').to(Acronym);
    const createMark = this.container.get('CreateMark');
    createMark(
      {
        acronym: AcronymMark,
      },
      { toWaxSchema: true },
    );
  }
}

export default AcronymService;
