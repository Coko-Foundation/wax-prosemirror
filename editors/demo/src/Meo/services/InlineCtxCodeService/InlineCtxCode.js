import { toggleMark } from 'prosemirror-commands';
import { Commands } from 'wax-prosemirror-utilities';
import { injectable } from 'inversify';
import { Tools } from 'wax-prosemirror-services';

export default
@injectable()
class InlineCtxCode extends Tools {
  title = 'Toggle ConTeXt code';
  icon = 'emphasis'; // TODO: create proper icon
  name = 'InlineCtxCode';

  get run() {
    return (state, dispatch) => {
      toggleMark(state.config.schema.marks.inline_ctx)(state, dispatch);
    };
  }

  get active() {
    return state => {
      return Commands.markActive(state.config.schema.marks.inline_ctx)(state);
    };
  }
}
