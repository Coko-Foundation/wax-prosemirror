import { css } from 'styled-components';

import { th } from '../../helpers';

/* All styles regarding ProseMirror surface and elements */

const fontWriting = css`
  color: ${th('colorText')};
  font-family: ${th('fontWriting')};
  font-size: ${th('fontSizeBase')};
`;

export default css`
  .ProseMirror {
    background: white;
    line-height: 12px;
    width: 492px;
    white-space: pre !important;
    overflow-x: auto;
    ${fontWriting}
  }
`;
