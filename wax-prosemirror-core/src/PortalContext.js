/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const PortalContext = React.createContext({
  createPortal: () => {},
  portals: [],
});

export default props => {
  const [portals, setPortals] = useState([]);

  const createPortal = useCallback(
    (element, component, node, view, getPos, decorations, context) => {
      setTimeout(() => {
        setPortals(prev => [
          ...prev,
          {
            id: uuidv4(),
            element,
            component,
            node,
            view,
            getPos,
            decorations,
            context,
          },
        ]);
      });
    },
    [],
  );

  return (
    <PortalContext.Provider value={{ createPortal, portals }}>
      {props.children}
    </PortalContext.Provider>
  );
};
