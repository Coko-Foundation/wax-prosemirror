import { Service } from 'wax-prosemirror-services';
import Save from './Save';

class CustomSaveService extends Service {
  name = 'CustomSaveService';
  boot() {}

  register() {
    this.container.bind('CustomSave').to(Save);
  }
}

export default CustomSaveService;
