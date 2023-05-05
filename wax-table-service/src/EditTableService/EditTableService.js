import { Service } from 'wax-prosemirror-core';
import TableDropDownOptions from './TableDropDownOptions';
import TableOverlay from '../components/TableOverlay';

class EditTableService extends Service {
  register() {
    this.container.bind('TableDropDownOptions').to(TableDropDownOptions);

    const createOverlay = this.container.get('CreateOverlay');

    createOverlay(
      TableOverlay,
      {},
      {
        nodeType: 'table',
        findInParent: false,
        markType: '',
        followCursor: false,
        selection: false,
      },
    );
  }
}

export default EditTableService;
