import { Service } from 'wax-prosemirror-core';

import tibetan from '../TranslationBlockService/schema/tibetan';
import phonetics from '../TranslationBlockService/schema/phonetics';
import translation from '../TranslationBlockService/schema/translation';
import translations from '../TranslationBlockService/schema/translations';
import translationBlock from '../TranslationBlockService/schema/translationBlock';
import translationBlockType from './schema/translationBlockType';

import MyBlockQuoteService from './MyBlockQuoteService/MyBlockQuoteService';
import TranslationBlockToolGroupService from './TranslationBlockToolGroupService/TranslationBlockToolGroupService';

import TranslationBlockNodeView from './TranslationBlockNodeView';
import TranslationBlockComponent from './components/TranslationBlockComponent';

class TranslationBlockService extends Service {
  register() {
    const createNode = this.container.get('CreateNode');
    const addPortal = this.container.get('AddPortal');

    createNode({ translation_block: translationBlock });
    createNode({ translation_block_type: translationBlockType });
    createNode({ tibetan: tibetan });
    createNode({ phonetics: phonetics });
    createNode({ translations: translations });
    createNode({ translation: translation });

    addPortal({
      nodeView: TranslationBlockNodeView,
      component: TranslationBlockComponent,
      context: this.app,
    });
  }
  dependencies = [
    new MyBlockQuoteService(),
    new TranslationBlockToolGroupService()
  ];
}

export default TranslationBlockService;
