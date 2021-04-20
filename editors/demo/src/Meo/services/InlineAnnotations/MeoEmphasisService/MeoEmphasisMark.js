const meo_emphasis = {
  parseDOM: [
    { tag: 'i.enfasi1' },
    { tag: 'em.enfasi1' }
  ],
  toDOM(hook, next) {
    hook.value = [ 'i', { class: 'enfasi1' }, 0 ];
    next();
  }
}

export default meo_emphasis;
