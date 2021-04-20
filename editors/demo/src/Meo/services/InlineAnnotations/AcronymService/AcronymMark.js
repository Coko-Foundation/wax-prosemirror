const acronym = {
  parseDOM: [ { tag: 'span.acronimo' } ],
  toDOM(hook, next) {
    hook.value = [ 'span', { class: 'acronimo' }, 0 ];
    next();
  }
}

export default acronym;
