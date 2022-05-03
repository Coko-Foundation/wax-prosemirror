/* eslint react/prop-types: 0 */
import React, {
  useContext,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { WaxContext } from 'wax-prosemirror-core';
import { MenuButton } from 'wax-prosemirror-components';

const SaveButton = ({ view = {}, item }) => {
  const { icon, label, select, title } = item;

  const {
    app,
    pmViews: { main },
    activeViewId,
    activeView,
  } = useContext(WaxContext);

  const { state } = view;

  const [isSaving, setIsSaving] = useState(false);

  const saveService = app.config.get('config.CustomSaveService');

  const handleMouseDown = useCallback((e, view) => {
    if (view) {
      const editorState = view.state;
      // const editorDispatch = view.editorDispatch;
      console.log('in my custom save');
      // eslint-disable-next-line no-underscore-dangle
      // view._props.onChange(state.doc.content);
      setIsSaving(true);
      saveService.saveContent(editorState.doc.toString());
      // console.log('SAVE: ' + editorState.doc.toString());
      // console.log(editorState.doc);
    }
    setTimeout(() => {
      setIsSaving(false);
    }, 300);
  });

  useEffect(() => {
    const triggerSave = e => {
      if ((e.key === 83 || e.keyCode === 83) && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleMouseDown();
        return false;
      }
      return true;
    };
    document.addEventListener('keydown', triggerSave);

    return () => document.removeEventListener('keydown', triggerSave);
  }, [handleMouseDown]);

  let isDisabled = !select(state, activeViewId, activeView);

  const isEditable = main.props.editable(editable => {
    return editable;
  });
  if (!isEditable) isDisabled = true;

  const iconTodisplay = !isSaving ? icon : 'done';

  const SaveButtonComponent = useMemo(
    () => (
      <MenuButton
        active={false}
        disabled={isDisabled}
        iconName={iconTodisplay}
        label={label}
        onMouseDown={e => handleMouseDown(e, view)}
        title={title}
      />
    ),
    [isDisabled, iconTodisplay, label, title, handleMouseDown, view],
  );

  return SaveButtonComponent;
};

export default SaveButton;
