const translation = {
  content: 'text*',
  attrs: { language: { default: 'english' } },
  toDOM: (node) => ['div', { class: 'translation', 'data-language': node.attrs.language }, 0],
  parseDOM: [{
    tag: 'div.translation',
    getAttrs: (dom) => ({ language: dom.getAttribute('data-language') }),
  }],
};

export default translation;
