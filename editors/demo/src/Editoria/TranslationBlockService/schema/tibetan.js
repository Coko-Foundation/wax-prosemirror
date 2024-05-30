const tibetan = {
    content: 'text*',
    toDOM: () => ['div', { class: 'tibetan' }, 0],
    parseDOM: [{ tag: 'div.tibetan' }],
};

export default tibetan;
