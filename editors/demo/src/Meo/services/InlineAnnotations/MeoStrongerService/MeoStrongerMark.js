const meo_stronger = {
  parseDOM: [
    { tag: 'b.enfasi3' },
    { tag: 'strong.enfasi3' }
  ],
  toDOM(hook, next) {
    hook.value = [ 'b', { class: 'enfasi3' }, 0 ];
    next();
  }
}

export default meo_stronger;
