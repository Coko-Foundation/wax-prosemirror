import { Service } from 'wax-prosemirror-core';
import TranslationBlockTool from './TranslationBlockTool';
import TranslationBlockToolGroup from './TranslationBlockToolGroup';

class TranslationBlockToolGroupService extends Service {
  name = 'TranslationBlockToolGroupService';

  register() {
    this.container.bind('TranslationBlockTool').to(TranslationBlockTool);
    this.container.bind('TranslationBlockToolGroup').to(TranslationBlockToolGroup);
  }
}

export default TranslationBlockToolGroupService;
