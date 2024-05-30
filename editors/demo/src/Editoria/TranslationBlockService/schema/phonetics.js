const phonetics = {
    content: 'text*',
    toDOM: () => ['div', { class: 'phonetics' }, 0],
    parseDOM: [{ tag: 'div.phonetics' }],
};

export default phonetics;
