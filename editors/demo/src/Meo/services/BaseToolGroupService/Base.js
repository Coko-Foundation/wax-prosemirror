import { injectable, inject } from 'inversify';
import { ToolGroup } from 'wax-prosemirror-services';

@injectable()
class Base extends ToolGroup {
  tools = [];
  constructor(
    @inject('Undo') undo,
    @inject('Redo') redo,
    @inject('CustomSave') save,
  ) {
    super();
    this.tools = [undo, redo, save];
  }
}

export default Base;
