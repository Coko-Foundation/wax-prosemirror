const translationBlockType = {
  content: 'text*',
  toDOM: () => ['div', { class: 'translation-block-type' }, 0],
  parseDOM: [{ tag: 'div.translation-block-type' }],
};

export default translationBlockType;
