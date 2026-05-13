/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
  left: ${props => `${props.$position.left}px`};
  position: ${props => props.$position.position};
  top: ${props => `${props.$position.top}px`};
  z-index: ${props => props.$position.zIndex};
`;

const Overlay = ({ position, children }) => (
  <OverlayContainer $position={position}>{children}</OverlayContainer>
);

export default Overlay;
