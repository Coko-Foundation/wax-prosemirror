import { css } from 'styled-components';
import { th } from '@pubsweet/ui-toolkit';

/* All styles regarding ProseMirror surface and elements */

const fontWriting = css`
  color: ${th('colorText')};
  font-family: ${th('fontWriting')};
  font-size: ${th('fontSizeBase')};
`;

export default css`
  .ProseMirror {
    ${fontWriting}
  }

  /* MEO */
  i:not(.enfasi1) {
    background-color: rgb(210, 210, 210);
    color: blue;
    display: inline;
    font-style: italic;
  }

  i.enfasi1 {
    color: blue;
    display: inline;
    font-style: italic;
    text-decoration: underline;
  }

  b.enfasi2 {
    color: inherit;
    display: inline;
    font-style: italic;
    font-weight: bold;
    text-decoration: underline;
  }

  b.enfasi3 {
    color: inherit;
    display: inline;
    font-style: italic;
    font-weight: bold;
    text-decoration: underline;
    text-shadow: 1px 0px 1px #000;
  }

  span.acronimo {
    background-color: #ccaaff;
    font-variant: small-caps;
    text-transform: lowercase;
  }

  span.ord-latino {
    background-color: #afdde9;
    font-variant: small-caps;
    text-transform: lowercase;
  }

  .stile-da-definire {
    background-color: #101010;
    color: yellow;
  }

  .context {
    /*
    background: black !important;
    color: rgb(150, 220, 150) !important;
    font-family: monospace !important;
    */
    background: black;
    color: rgb(150, 220, 150);
    font-family: monospace;
    font-size: 12pt;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    margin: 0px;
    padding: 4px;
    text-indent: 0px;
    white-space: pre-wrap;
  }
`;
