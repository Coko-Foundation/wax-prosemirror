const multinote = {
  group: 'inline',
  content: 'inline*',
  inline: true,
  atom: true,
  attrs: {
    id: { default: '' },
  },
  toDOM: node => {
    if (node) {
      return ['multinote', node.attrs];
    }
  },
  parseDOM: [
    {
      tag: 'multinote',
      getAttrs(dom) {
        return {
          id: dom.getAttribute('id'),
        };
      },
    },
  ],
};

export default multinote;
