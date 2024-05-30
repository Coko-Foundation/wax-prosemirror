const TranslationBlock = {
  content: 'translationBlockType tibetan phonetics translations',
  toDOM: () => ['div', { class: 'translation-block', style: "padding: 15px; background: lightgrey" }, 0],
  parseDOM: [{ tag: 'div.translation-block' }],
};

export default TranslationBlock;
