import React, { useMemo } from 'react';
import { injectable, inject } from 'inversify';
import { ToolGroupComponent } from 'wax-prosemirror-components';
import { isEmpty } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { ToolGroup } from 'wax-prosemirror-services';

@injectable()
class MeoAnnotations extends ToolGroup {
  tools = [];
  constructor(
    @inject('Emphasis') emphasis,
    @inject('Strong') strong,
    @inject('Stronger') stronger,
    @inject('Acronym') acronym,
    @inject('Bold') bold,
    @inject('Italic') italic,
    @inject('RomanNumeral') roman_numeral,
  ) {
    super();
    this.tools = [
      roman_numeral,
      emphasis,
      strong,
      stronger,
      acronym,
      bold,
      italic,
    ];
  }
}

export default MeoAnnotations;
