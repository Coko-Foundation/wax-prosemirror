import { Service } from "wax-prosemirror-services";
import { toggleMark } from "prosemirror-commands";
import { boldMark } from "wax-prosemirror-schema";
import Bold from "./Bold";
import BoldMark from "./BoldMark";

class BoldService extends Service {
  boot() {
    const shortCuts = this.container.get("ShortCuts");
    shortCuts.addShortCut({ "Mod-b": toggleMark(this.schema.marks.bold) });
  }

  register() {
    this.container.bind("Bold").to(Bold);
    const createMark = this.container.get("CreateMark");
    createMark(
      {
        bold: BoldMark
      },
      { toWaxSchema: true }
    );
  }
}

export default BoldService;
