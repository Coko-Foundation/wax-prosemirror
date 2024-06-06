import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { StepMap } from 'prosemirror-transform';
import { WaxContext } from 'wax-prosemirror-core';

const EditorWrapper = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: row;
  > .ProseMirror {
    padding: 0px !important;
    box-shadow: none !important;
    width: 100% !important;
    &:focus {
      outline: none;
    }
    p {
      margin: 0;

      br {
        display: none;
      }
    }
  }
`;

const EditorComponent = ({ node, view, getPos }) => {
  const editorRef = useRef();
  const context = useContext(WaxContext);
  const translationBlockId = node.attrs.id;

  let editorView;

  useEffect(() => {
    editorView = new EditorView(
      {
        mount: editorRef.current,
      },
      {
        state: EditorState.create({
          doc: node
        }),
        dispatchTransaction,
        disallowedTools: [
          'Images',
          'Lists',
          'lift',
          'Tables'
        ],
      },
    );

    context.updateView(
      {
        [translationBlockId]: editorView,
      },
      translationBlockId,
    );
  }, []);

  const dispatchTransaction = tr => {
    const { state, transactions } = editorView.state.applyTransaction(tr);
    editorView.updateState(state);
    context.updateView({}, translationBlockId);

    if (!tr.getMeta('fromOutside')) {
      const outerTr = view.state.tr;
      const offsetMap = StepMap.offset(getPos() + 1);
      for (let i = 0; i < transactions.length; i++) {
        const { steps } = transactions[i];
        for (let j = 0; j < steps.length; j++)
          outerTr.step(steps[j].map(offsetMap));
      }
      if (outerTr.docChanged)
        view.dispatch(outerTr.setMeta('outsideView', translationBlockId));
    }
  };

  return (
    <EditorWrapper>
      <div ref={editorRef} />
    </EditorWrapper>
  );
};

export default EditorComponent;
