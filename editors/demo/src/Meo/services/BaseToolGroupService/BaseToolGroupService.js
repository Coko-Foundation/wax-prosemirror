import { Service } from 'wax-prosemirror-services';
import Base from './Base';

class BaseToolGroupService extends Service {
  register() {
    this.container.bind('Base').to(Base);
  }
}

export default BaseToolGroupService;
