import React from 'react';
import { isEmpty } from 'lodash';
import { injectable } from 'inversify';

import { icons } from 'wax-prosemirror-components';
import SaveButton from './SaveButton';
import { Tools } from 'wax-prosemirror-services';

export default
@injectable()
class Save extends Tools {
  title = 'Save changes';
  icon = 'save';
  onlyOnMain = true;
  name = 'Save';
  content = icons.save;
  name = 'Save';

  get run() {
    return (state, dispatch) => {
      return true;
    };
  }

  get enable() {}

  renderTool(view) {
    if (isEmpty(view)) return null;
    // eslint-disable-next-line no-underscore-dangle
    return this._isDisplayed ? (
      <SaveButton item={this.toJSON()} key="Save" view={view}/>
    ) : null;
  }
}
