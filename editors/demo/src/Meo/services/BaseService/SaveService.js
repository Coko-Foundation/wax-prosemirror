import { Service } from "wax-prosemirror-services";
import Save from "./Save";

class SaveService extends Service {
  boot() {}

  register() {
    this.container.bind("Save").to(Save);
  }
}

export default SaveService;
