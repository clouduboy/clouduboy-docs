const fs = require('fs')
const path = require('path')

const { JSDOM } = require('jsdom'),
  marked = require('marked'),
  prettier = require('prettier')


let template = load('templates/index.html')
let dom = new JSDOM(template),
  document = dom.window.document,
  $ = document.querySelector.bind(document)

let feature = 'microcanvas'
let md = load(`source/${feature}.md`)

let contents = marked(md)
let docmain = $('main')

if (docmain) {
  docmain.innerHTML = contents
}

let title = ($('h1') || {}).textContent

save(`docs/${feature}.html`, prettier.format(dom.serialize(), { parser: 'html' }))

console.log(title)



function load(fn) {
  return fs.readFileSync(path.join(__dirname, fn)).toString()
}

function save(fn, contents) {
  fs.writeFileSync(path.join(__dirname, fn), contents)
}
