import { Service } from "wax-prosemirror-services";
import UndoService from 'wax-prosemirror-services/src/BaseService/UndoService/UndoService';
import RedoService from 'wax-prosemirror-services/src/BaseService/RedoService/RedoService';
import SaveService from './SaveService';

class BaseService extends Service {
  dependencies = [new UndoService(), new RedoService(), new SaveService()];
}

export default BaseService;
