import { toggleMark } from 'prosemirror-commands';
import { emphasisMark } from 'wax-prosemirror-schema';
import InlineCtxCode from './InlineCtxCode';
import { Service } from "wax-prosemirror-services";
import InlineCtxCodeMark from './InlineCtxCodeMark';

class InlineCtxCodeService extends Service {
  boot() {
    // const shortCuts = this.container.get('ShortCuts');
    // shortCuts.addShortCut({ 'Mod-i': toggleMark(this.schema.marks.em) });
  }

  register() {
    this.container.bind('InlineCtxCode').to(InlineCtxCode);
    const createMark = this.container.get('CreateMark');
    createMark(
      {
        inline_ctx: InlineCtxCodeMark,
      },
      { toWaxSchema: true },
    );
  }
}

export default InlineCtxCodeService;
