const roman_numeral = {
  parseDOM: [ { tag: 'span.ord-latino' } ],
  toDOM(hook, next) {
    hook.value = ['span', { class: "ord-latino" } , 0];
    next();
  }
}

export default roman_numeral;
