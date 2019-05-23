const { DOMParser, DOMSerializer } = require("prosemirror-model");
const ist = require("ist");

const {
  schema,
  eq,
  doc,
  h1,
  h2,
  p,
  em,
  img,
  builders
} = require("prosemirror-test-builder");

const document =
  typeof window == "undefined"
    ? new (require("jsdom")).JSDOM().window.document
    : window.document;

function domFrom(html) {
  let dom = document.createElement("div");
  dom.innerHTML = html;
  return dom;
}

function testProsemirror(doc, html) {
  return () => {
    let derivedDOM = document.createElement("div"),
      schema = doc.type.schema;
    derivedDOM.appendChild(
      DOMSerializer.fromSchema(schema).serializeFragment(doc.content, {
        document
      })
    );
    let declaredDOM = domFrom(html);
    ist(derivedDOM.innerHTML, declaredDOM.innerHTML);
    ist(DOMParser.fromSchema(schema).parse(derivedDOM), doc, eq);
  };
}

test("can represent simple node", () => {
  testProsemirror(doc(p("hello")), "<p>hello</p>")();
});

test("can represent an image", () => {
  testProsemirror(
    doc(p("hi", img({ alt: "alt" }), "there")),
    '<p>hi<img src="img.png" alt="alt"/>there</p>'
  )();
});
