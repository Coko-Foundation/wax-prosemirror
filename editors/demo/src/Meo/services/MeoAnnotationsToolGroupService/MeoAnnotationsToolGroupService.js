import { Service } from "wax-prosemirror-services";
import MeoAnnotations from "./MeoAnnotations";

class MeoAnnotationsToolGroupService extends Service {
  name = "MeoAnnotationsToolGroupService";

  register() {
    this.container.bind("Annotations").to(MeoAnnotations);
  }
}

export default MeoAnnotationsToolGroupService;
