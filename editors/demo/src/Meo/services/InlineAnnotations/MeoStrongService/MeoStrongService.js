import { toggleMark } from 'prosemirror-commands';
import { emphasisMark } from 'wax-prosemirror-schema';
import MeoStrong from './MeoStrong';
import { Service } from "wax-prosemirror-services";
import MeoStrongMark from './MeoStrongMark';

class MeoStrongService extends Service {
  boot() {
    // const shortCuts = this.container.get('ShortCuts');
    // shortCuts.addShortCut({ 'Mod-i': toggleMark(this.schema.marks.strong) });
  }

  register() {
    this.container.bind('Strong').to(MeoStrong);
    const createMark = this.container.get('CreateMark');
    createMark(
      {
        strong: MeoStrongMark,
      },
      { toWaxSchema: true },
    );
  }
}

export default MeoStrongService;
