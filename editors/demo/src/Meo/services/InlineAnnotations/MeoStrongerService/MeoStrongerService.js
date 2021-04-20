import { toggleMark } from 'prosemirror-commands';
import { emphasisMark } from 'wax-prosemirror-schema';
import MeoStronger from './MeoStronger';
import { Service } from "wax-prosemirror-services";
import MeoStrongerMark from './MeoStrongerMark';

class MeoStrongerService extends Service {
  boot() {
    // const shortCuts = this.container.get('ShortCuts');
    // shortCuts.addShortCut({ 'Mod-i': toggleMark(this.schema.marks.stronger) });
  }

  register() {
    this.container.bind('MeoStronger').to(MeoStronger);
    const createMark = this.container.get('CreateMark');
    createMark(
      {
        stronger: MeoStrongerMark,
      },
      { toWaxSchema: true },
    );
  }
}

export default MeoStrongerService;
