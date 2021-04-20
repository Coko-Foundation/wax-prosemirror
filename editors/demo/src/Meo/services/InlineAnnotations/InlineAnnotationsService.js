import { Service } from 'wax-prosemirror-services';
import InlineServices from "./index";

class InlineAnnotationsService extends Service {
  dependencies = InlineServices;
}

export default InlineAnnotationsService;
