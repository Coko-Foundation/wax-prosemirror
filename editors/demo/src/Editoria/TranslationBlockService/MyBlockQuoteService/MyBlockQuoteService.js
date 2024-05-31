import { Service } from 'wax-prosemirror-core';
import myBlockQuoteNode from './schema/myBlockQuoteNode';
import MyBlockQuote from './MyBlockQuote';
import './blockQuote.css';

class MyBlockQuoteService extends Service {
  name = 'MyBlockQuoteService';

  register() {
    this.container.bind('MyBlockQuote').to(MyBlockQuote);
    const createNode = this.container.get('CreateNode');
    createNode({
      myBlockquote: myBlockQuoteNode,
    });
  }
}

export default MyBlockQuoteService;
