/* eslint-disable react/destructuring-assignment */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { WaxContext, DocumentHelpers, Icon } from 'wax-prosemirror-core';
import styled from 'styled-components';
import ContainerEditor from './ContainerEditor';

const TranslationBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 38px 15px 38px;
  margin-top: 10px;

  .ProseMirror-selectednode {
    outline: none;
  }
`;

const TranslationBlockTool = styled.div`
  border: 3px solid #f5f5f7;
  border-bottom: none;
`;

const TranslationBlock = styled.div`
  border: 3px solid #f5f5f7;
  margin-bottom: 30px;
  padding: 10px;
`;

const TranslationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const RemoveTranslationButton = styled.button`
  background: transparent;
  cursor: pointer;
  margin-top: 6px;
  border: none;
  position: relative;
  bottom: 2px;
  left: -11px;
  float: right;
`;

const StyledIconActionRemove = styled(Icon)`
  height: 24px;
  width: 24px;
`;

export default ({ node, view, getPos }) => {
  const context = useContext(WaxContext);
  const {
    pmViews: { main },
  } = context;

  return (
    <TranslationBlockWrapper>
      {/* <span>TranslationBlock</span> */}
      <TranslationBlockTool>
        <RemoveTranslationButton
          aria-label="delete this block"
          type="button"
        >
          <StyledIconActionRemove name="deleteOutlinedQuestion" />
        </RemoveTranslationButton>
      </TranslationBlockTool>
      <TranslationBlock className="translation-block">
        <TranslationWrapper>
          {/* <ContainerEditor getPos={getPos} node={node} view={view} /> */}
        </TranslationWrapper>
      </TranslationBlock>
    </TranslationBlockWrapper>
  );
};
