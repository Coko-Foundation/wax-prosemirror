import { Service } from 'wax-prosemirror-core';
import TranslationBlockToolGroup from './TranslationBlock';

class TranslationBlockToolGroupService extends Service {
  name = 'TranslationBlockToolGroupService';

  register() {
    this.container.bind('TranslationBlockToolGroup').to(TranslationBlockToolGroup);
  }
}

export default TranslationBlockToolGroupService;
