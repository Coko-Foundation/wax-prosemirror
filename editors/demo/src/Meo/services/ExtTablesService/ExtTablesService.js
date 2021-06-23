import { Service } from "wax-prosemirror-services";
import InsertTableService from "./InsertTableService";
import EditTableService from "./EditTableService";

class ExtTablesService extends Service {
  dependencies = [ new InsertTableService(), new EditTableService() ];
}

export default ExtTablesService;
