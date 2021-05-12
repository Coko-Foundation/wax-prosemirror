import { Service } from "wax-prosemirror-services";
import InsertTableService from "./InsertTableService";
import EditTableService from "wax-prosemirror-services/src/TablesService/EditTableService/EditTableService";

class ExtTablesService extends Service {
  dependencies = [ new InsertTableService(), new EditTableService() ];
}

export default ExtTablesService;
