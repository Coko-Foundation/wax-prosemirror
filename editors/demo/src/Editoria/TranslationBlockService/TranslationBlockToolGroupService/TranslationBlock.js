import React, { useMemo } from 'react';
import { injectable, inject } from 'inversify';
import { isEmpty } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { ToolGroup, ToolGroupComponent } from 'wax-prosemirror-core';

@injectable()
class TranslationBlockToolGroup extends ToolGroup {
  tools = [];
  constructor(
    @inject('MyBlockQuote') blockQuote,
  ) {
    super();
    this.tools = [
      blockQuote
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

export default TranslationBlockToolGroup;
