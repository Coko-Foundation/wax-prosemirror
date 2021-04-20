import { toggleMark } from 'prosemirror-commands';
import { emphasisMark } from 'wax-prosemirror-schema';
import MeoEmphasis from './MeoEmphasis';
import { Service } from "wax-prosemirror-services";
import MeoEmphasisMark from './MeoEmphasisMark';

class MeoEmphasisService extends Service {
  boot() {
    // const shortCuts = this.container.get('ShortCuts');
    // shortCuts.addShortCut({ 'Mod-i': toggleMark(this.schema.marks.em) });
  }

  register() {
    this.container.bind('MeoEmphasis').to(MeoEmphasis);
    const createMark = this.container.get('CreateMark');
    createMark(
      {
        em: MeoEmphasisMark,
      },
      { toWaxSchema: true },
    );
  }
}

export default MeoEmphasisService;
