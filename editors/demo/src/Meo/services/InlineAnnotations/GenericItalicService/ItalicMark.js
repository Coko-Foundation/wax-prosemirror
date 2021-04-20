const italic = {
  parseDOM: [
    { tag: 'i' },
    { tag: 'em' },
    { style: 'font-style=italic' }
  ],
  toDOM(hook, next) {
    hook.value = ['i', 0];
    next();
  }
}

export default italic;
