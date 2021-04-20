import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Editoria from './Editoria/Editoria';
// import HHMI from './HHMI/HHMI';
import Meo from './Meo/Meo';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-y: hidden;
    padding: 0;
  }

  #root {
    height:100vh;
    width:100vw;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  height: calc(100% - 55px);
`;

const ChooseProject = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  span {
    margin-right: 20px;
  }
`;

const Projects = styled.div`
  margin-left: 10px;
`;

const ProjectButton = styled.button`
  cursor: pointer;
  margin-right: 20px;
`;

const Editors = () => {
  const [project, setProject] = useState('meo');

  const displayProject = () => {
    switch (project) {
      case 'editoria':
        return <Editoria />;
      // case 'hhmi':
      //   return <HHMI />;
      case 'meo':
        return <Meo />;
      case 'ncbi':
        break;
      default:
        return <Meo />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <ChooseProject>
        <Projects>
          <span>Select Project:</span>
          <ProjectButton onClick={() => setProject('editoria')}>
            Editoria
          </ProjectButton>
          {/* <ProjectButton onClick={() => setProject('hhmi')}>HHMI</ProjectButton> */}
          <ProjectButton onClick={() => setProject('meo')}>Meo</ProjectButton>
          {/* <ProjectButton onClick={() => setProject('ncbi')}>NCBI</ProjectButton> */}
        </Projects>
      </ChooseProject>
      <ProjectContainer>{displayProject()}</ProjectContainer>
    </>
  );
};

export default Editors;
