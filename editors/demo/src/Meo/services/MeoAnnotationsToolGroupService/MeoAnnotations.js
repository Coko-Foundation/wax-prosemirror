import React, { useMemo } from 'react';
import { injectable, inject } from 'inversify';
import { ToolGroupComponent } from 'wax-prosemirror-components';
import { isEmpty } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import ToolGroup from 'wax-prosemirror-services/src/lib/ToolGroup';

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
      emphasis,
      strong,
      stronger,
      acronym,
      bold,
      italic,
      roman_numeral,
    ];
  }

  renderTools(view) {
    if (isEmpty(view)) return null;

    const { name } = this.constructor;

    const MemorizedToolGroupComponent = useMemo(
      () => (
        <ToolGroupComponent
          key={uuidv4()}
          view={view}
          tools={this._tools}
          title={this.title}
          name={name}
        />
      ),
      [view],
    );

    return MemorizedToolGroupComponent;
  }
}

export default MeoAnnotations;
