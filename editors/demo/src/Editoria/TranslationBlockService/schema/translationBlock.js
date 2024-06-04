const TranslationBlock = {
  // content: 'translation_block_type tibetan phonetics translations',
  content: 'block+',
  group: 'block',
  toDOM: () => ['div', { class: 'translation-block' }, 0],
  parseDOM: [{ tag: 'div.translation-block' }],
};

export default TranslationBlock;
