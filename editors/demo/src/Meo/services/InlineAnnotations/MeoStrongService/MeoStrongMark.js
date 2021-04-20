const meo_strong = {
  parseDOM: [
    { tag: 'b.enfasi2' },
    { tag: 'strong.enfasi2' }
  ],
  toDOM(hook, next) {
    hook.value = [ 'b', { class: 'enfasi2' }, 0 ];
    next();
  }
}

export default meo_strong;
