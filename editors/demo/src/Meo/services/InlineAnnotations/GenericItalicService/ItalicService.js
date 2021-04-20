import { toggleMark } from 'prosemirror-commands';
import { italicMark } from 'wax-prosemirror-schema';
import Italic from './Italic';
import { Service } from "wax-prosemirror-services";
import ItalicMark from './ItalicMark';

class ItalicService extends Service {
  boot() {
    const shortCuts = this.container.get('ShortCuts');
    shortCuts.addShortCut({ 'Mod-i': toggleMark(this.schema.marks.italic) });
  }

  register() {
    this.container.bind('Italic').to(Italic);
    const createMark = this.container.get('CreateMark');
    createMark(
      {
        italic: ItalicMark,
      },
      { toWaxSchema: true },
    );
  }
}

export default ItalicService;
