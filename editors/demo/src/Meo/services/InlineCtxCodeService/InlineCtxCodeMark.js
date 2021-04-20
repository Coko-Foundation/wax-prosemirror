const inline_ctx_code = {
  parseDOM: [ { tag: 'span.context' } ],
  toDOM(hook, next) {
    hook.value = [ 'span', { class: 'context' }, 0 ];
    next();
  }
}

export default inline_ctx_code;
