import { TextSelection } from "prosemirror-state"
import { chunk, isEqual } from "lodash";

function addMark( start, end, mark ) {
  return function( state, dispatch ) {
    console.log( `addMark, mark=${mark.type.name}, attr=${JSON.stringify(mark.attrs)}` );
    if ( mark && dispatch ) {
      let tr = state.tr;
      // remove all the marks of the same type (that may differ only for the attrs)
      tr.removeMark( start, end, mark.type );
      tr.addMark( start, end, mark );
      // console.log( `selection from ${tr.selection.from} to ${tr.selection.to}, anchor=${tr.selection.anchor}, head=${tr.selection.head}` );
      const sel = TextSelection.create( tr.doc, start, end );
      tr.setSelection( sel );
      // console.log( `selection from ${tr.selection.from} to ${tr.selection.to}, anchor=${tr.selection.anchor}, head=${tr.selection.head}` );
      dispatch( tr.scrollIntoView() );
    }
    return true;
  }
}

function removeMark( start, end, mark ) {
  return function( state, dispatch ) {
    if ( mark && dispatch ) {
      // console.log( `removeMark, mark=${mark.type.name}, attr=${JSON.stringify(mark.attrs)}` );
      let tr = state.tr;
      tr.removeMark( start, end, mark );
      // console.log( `selection from ${tr.selection.from} to ${tr.selection.to}, anchor=${tr.selection.anchor}, head=${tr.selection.head}` );
      const sel = TextSelection.create( tr.doc, start, end );
      tr.setSelection( sel );
      // console.log( `selection from ${tr.selection.from} to ${tr.selection.to}, anchor=${tr.selection.anchor}, head=${tr.selection.head}` );
      dispatch( tr.scrollIntoView() );
    }
    return true;
  }
}

function replaceMark( start, end, oldMark, newMark ) {
  return function( state, dispatch ) {
    if ( oldMark && newMark && dispatch ) {
      // console.log( `replaceMark, oldMark=${oldMark.type.name}, attr=${JSON.stringify(oldMark.attrs)}` );
      // console.log( `replaceMark, newMark=${newMark.type.name}, attr=${JSON.stringify(newMark.attrs)}` );
      let tr = state.tr;
      tr.removeMark( start, end, oldMark );
      tr.addMark( start, end, newMark );
      // console.log( `selection from ${tr.selection.from} to ${tr.selection.to}, anchor=${tr.selection.anchor}, head=${tr.selection.head}` );
      const sel = TextSelection.create( tr.doc, start, end );
      tr.setSelection( sel );
      // console.log( `selection from ${tr.selection.from} to ${tr.selection.to}, anchor=${tr.selection.anchor}, head=${tr.selection.head}` );
      dispatch( tr.scrollIntoView() );
    }
    return true;
  }
}

function findMarkSpan( state, pos, mark ) {
  if ( state && mark ) {
    const doc = state.doc;
    const maxpos = doc.nodeSize;
    const markName = mark.type.name;
    const markAttrs = mark.attrs;
    let end = pos + 1;
    while ( end < maxpos ) {
      const marks = doc.resolve( end ).marks();
      const found = marks.find( m => m.type.name == markName && isEqual( m.attrs, markAttrs ) ) ? true : false;
      if ( found ) end++ ; else break;
    }
    let start = end > pos + 1 ? pos : pos + 1;
    while ( start > 0 ) {
      const marks = doc.resolve( start ).marks();
      const found = marks.find( m => m.type.name == markName && isEqual( m.attrs, markAttrs ) ) ? true : false;
      if ( found ) start-- ; else break;
    }
    return { start, end };
  }
  return {
    start: pos,
    end: pos
  };
}

function toggleMarkAtSelection( state, mark ) {
  const { from, $from, to, empty } = state.selection;
  const markType = mark.type;
  const markName = markType.name;
  const markAttrs = mark.attrs;
  const marks = $from.marks();
  const sameMark = marks.filter( m => m.type.name == markName );
  const sameMarkSameAttr = sameMark.find( m => isEqual( m.attrs, markAttrs ) );
  if ( empty ) {
    const { start, end } = findMarkSpan( state, from, mark );
    console.log( `start=${start}, end=${end}` );
    if ( start == end ) {
      return addMark( start, end, mark );
    } else {
      return removeMark( start, end, mark );
    }
  } else {
    if ( state.doc.rangeHasMark( from, to, markType ) ) {
      return removeMark( from, to, mark );
    } else {
      return addMark( from, to, mark );
    }
  }
}

function replaceMarkAtSelection( state, oldMark, newMark ) {
  const { from, $from, to, empty } = state.selection;
  if ( empty ) {
    const { start, end } = findMarkSpan( state, from, oldMark );
    // console.log( `start=${start}, end=${end}` );
    if ( start == end ) {
      return addMark( start, end, newMark );
    } else {
      return replaceMark( start, end - 1, oldMark, newMark );
    }
  } else {
    return replaceMark( from, to, oldMark, newMark );
  }
}

function removeMarkAtSelection( state, oldMark ) {
  const { from, $from, to, empty } = state.selection;
  if ( empty ) {
    const { start, end } = findMarkSpan( state, from, oldMark );
    return removeMark( start, end, oldMark );
  }
}

export default {
  addMark,
  removeMark,
  replaceMark,
  findMarkSpan,
  toggleMarkAtSelection,
  replaceMarkAtSelection,
  removeMarkAtSelection,
}
