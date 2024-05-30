import { Service } from 'wax-prosemirror-core';

import tibetan from '../TranslationBlockService/schema/tibetan';
import phonetics from '../TranslationBlockService/schema/phonetics';
import translation from '../TranslationBlockService/schema/translation';
import translations from '../TranslationBlockService/schema/translations';
import translationBlock from '../TranslationBlockService/schema/translationBlock';
import translationBlockType from '../TranslationBlockService/schema/translationBlockType';

import BlockQuoteService from './BlockQuoteService/BlockQuoteService';
import TranslationBlockToolGroupService from './TranslationBlockToolGroupService/TranslationBlockToolGroupService';

class TranslationBlockService extends Service {
  register() {
    const createNode = this.container.get('CreateNode');
    
    createNode({ translationBlock: translationBlock });
    createNode({ translationBlockType: translationBlockType });
    createNode({ tibetan: tibetan });
    createNode({ phonetics: phonetics });
    createNode({ translations: translations });
    createNode({ translation: translation });
  }
  dependencies = [
    // new BlockQuoteService(),
    new TranslationBlockToolGroupService()
  ];
}

export default TranslationBlockService;
