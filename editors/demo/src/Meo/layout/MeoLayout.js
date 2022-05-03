import React, { useContext, useState, useCallback, useEffect } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PanelGroup from 'react-panelgroup';
import { DocumentHelpers } from 'wax-prosemirror-utilities';
import { WaxContext, ComponentPlugin } from 'wax-prosemirror-core';
import { grid, th } from '@pubsweet/ui-toolkit';
import { cokoTheme } from '../theme';
import EditorElements from './EditorElements';

/* Katex css */
// import '~../../katex/dist/katex.min.css';

const Main = styled.div`
  display: flex;
  flex-grow: 1;
  height: calc(100% - 40px);
`;

const TopMenu = styled.div`
  background: ${th('colorBackgroundToolBar')};
  border-bottom: ${th('borderWidth')} ${th('borderStyle')} ${th('colorBorder')};
  border-top: ${th('borderWidth')} ${th('borderStyle')} ${th('colorBorder')};
  display: flex;
  min-height: 40px;
  user-select: none;

  > div[data-name='Tables'] {
    border-right: none;
  }

  > div:last-child {
    margin-left: 0;
    margin-right: ${grid(5)};
  }

  > div:not(:last-child) {
    border-right: ${th('borderWidth')} ${th('borderStyle')}
      ${th('colorFurniture')};
  }

  > div:nth-last-of-type(-n + 2) {
    margin-left: auto;
  }
`;

const SideMenu = styled.div`
  background: ${th('colorBackgroundToolBar')};
  border-right: ${th('borderWidth')} ${th('borderStyle')} ${th('colorBorder')};
  height: calc(100% - 16px);
  min-width: 250px;
`;

const EditorArea = styled.div`
  flex-grow: 1;
`;

const WaxSurfaceScroll = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  /* PM styles  for main content*/
  ${EditorElements};
  overflow-y: auto;
  position: absolute;
  width: 100%;
`;

const EditorContainer = styled.div`
  height: 100%;
  width: 65%;

  .ProseMirror {
    box-shadow: 0 0 8px #ecedf1;
    min-height: 98%;
    padding: ${grid(10)};
  }
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
`;

const CommentsContainerNotes = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
`;

const CommentTrackToolsContainer = styled.div`
  background: white;
  display: flex;
  padding-top: 5px;
  position: fixed;
  right: 30px;
  width: 25%;
  z-index: 1;
`;

const CommentTrackTools = styled.div`
  display: flex;
  margin-left: auto;
  position: relative;
  z-index: 1;
`;

const CommentTrackOptions = styled.div`
  bottom: 5px;
  display: flex;
  margin-left: 10px;
  position: relative;
`;

const NotesAreaContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  height: 100%;
  /* PM styles  for note content*/
  ${EditorElements};
  overflow-y: scroll;
  position: absolute;
  width: 100%;

  .ProseMirror {
    display: inline;
  }
`;

const NotesContainer = styled.div`
  box-shadow: 0 0 8px #ecedf1;
  /* counter-reset: footnote-view multinote-view; */
  counter-reset: multinote-view;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: ${grid(4)};
  width: 65%;
`;
const WaxBottomRightInfo = styled.div``;
const InfoContainer = styled.div`
  bottom: 1px;
  display: flex;
  position: fixed;
  right: 21px;
  z-index: 999;
`;

const divider = css`
  .panelGroup {
    background: #fff;
  }

  .divider {
    > div {
      background: ${th('colorBorder')};
      height: ${grid(1)};
      max-height: ${grid(1)};

      &:hover {
        height: ${grid(2)};
        max-height: ${grid(2)};
      }
    }
  }
`;

const Wrapper = styled.div`
  background: ${th('colorBackground')};
  display: flex;
  flex-direction: column;
  font-family: ${th('fontInterface')};
  font-size: ${th('fontSizeBase')};
  height: 100%;
  line-height: ${grid(4)};
  ${divider}
  overflow: hidden;
  width: 100%;

  * {
    box-sizing: border-box;
  }
`;

let surfaceHeight = (window.innerHeight / 5) * 3;
let notesHeight = (window.innerHeight / 5) * 2;

const onResizeEnd = arr => {
  surfaceHeight = arr[0].size;
  notesHeight = arr[1].size;
};

const getNotes = main => {
  const notes = DocumentHelpers.findChildrenByType(
    main.state.doc,
    main.state.schema.nodes.multinote,
    true,
  );
  return notes;
};

const LeftSideBar = ComponentPlugin('leftSideBar');
const MainMenuToolBar = ComponentPlugin('mainMenuToolBar');
const NotesArea = ComponentPlugin('notesArea');
const RightArea = ComponentPlugin('rightArea');
const CommentTrackToolBar = ComponentPlugin('commentTrackToolBar');
const BottomRightInfo = ComponentPlugin('BottomRightInfo');

const EditoriaLayout = ({ editor }) => {
  const {
    pmViews: { main },
    options,
  } = useContext(WaxContext);

  let fullScreenStyles = {};

  if (options.fullScreen) {
    fullScreenStyles = {
      backgroundColor: '#fff',
      height: '100%',
      left: '0',
      margin: '0',
      padding: '0',
      position: 'fixed',
      top: '0',
      width: '100%',
      zIndex: '99999',
    };
  }
  const notes = main && getNotes(main);
  const commentsTracksCount =
    main && DocumentHelpers.getCommentsTracksCount(main);
  const trackBlockNodesCount =
    main && DocumentHelpers.getTrackBlockNodesCount(main);

  const areNotes = notes && !!notes.length && notes.length > 0;

  const [hasNotes, setHasNotes] = useState(areNotes);

  const showNotes = () => {
    setHasNotes(areNotes);
  };

  const delayedShowedNotes = useCallback(
    setTimeout(() => showNotes(), 100),
    [],
  );

  useEffect(() => {}, [delayedShowedNotes]);

  return (
    <ThemeProvider theme={cokoTheme}>
      <Wrapper style={fullScreenStyles} id="wax-container">
        <TopMenu>
          <MainMenuToolBar />
        </TopMenu>

        <Main>
          <SideMenu>
            <LeftSideBar />
          </SideMenu>

          <EditorArea>
            <PanelGroup
              direction="column"
              panelWidths={[
                { size: surfaceHeight, resize: 'stretch' },
                { size: notesHeight, resize: 'resize' },
              ]}
              onResizeEnd={onResizeEnd}
            >
              <WaxSurfaceScroll>
                <EditorContainer>{editor}</EditorContainer>
                <CommentsContainer>
                  <CommentTrackToolsContainer>
                    <CommentTrackTools>
                      {commentsTracksCount + trackBlockNodesCount} COMMENTS AND
                      SUGGESTIONS
                      <CommentTrackOptions>
                        <CommentTrackToolBar />
                      </CommentTrackOptions>
                    </CommentTrackTools>
                  </CommentTrackToolsContainer>
                  <RightArea area="main" />
                </CommentsContainer>
              </WaxSurfaceScroll>

              {hasNotes && (
                <NotesAreaContainer>
                  <NotesContainer id="notes-container">
                    <NotesArea view={main} />
                  </NotesContainer>
                  <CommentsContainerNotes>
                    <RightArea area="notes" />
                  </CommentsContainerNotes>
                </NotesAreaContainer>
              )}
            </PanelGroup>
          </EditorArea>
        </Main>
        <WaxBottomRightInfo>
          <InfoContainer id="info-container">
            <BottomRightInfo />
          </InfoContainer>
        </WaxBottomRightInfo>
      </Wrapper>
    </ThemeProvider>
  );
};

export default EditoriaLayout;
