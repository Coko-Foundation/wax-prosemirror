import { Service } from 'wax-prosemirror-services';
import multiNoteNode from './MultiNoteNode';
import { CommentBubbleComponent } from 'wax-prosemirror-components';
import Note from './MultiNote';
import NoteComponent from './NoteComponent';

class NoteService extends Service {
  name = 'NoteService';

  boot() {
    const layout = this.container.get('Layout');
    const createOverlay = this.container.get('CreateOverlay');
    layout.addComponent('notesArea', NoteComponent);

    createOverlay(
      CommentBubbleComponent,
      {
        showComment: activeViewId => activeViewId !== 'main',
        group: 'notes',
      },
      {
        markType: '',
        followCursor: false,
        selection: true,
      },
    );
  }

  register() {
    const createNode = this.container.get('CreateNode');
    this.container.bind('Note').to(Note);

    createNode({
      multinote: multiNoteNode,
    });
  }
}

export default NoteService;
