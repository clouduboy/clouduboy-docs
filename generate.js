const fs = require('fs')
const path = require('path')

const { JSDOM } = require('jsdom'),
  marked = require('marked'),
  prettier = require('prettier')


sources().forEach(generate)


function load(fn) {
  return fs.readFileSync(path.join(__dirname, fn)).toString()
}

function save(fn, contents) {
  fs.writeFileSync(path.join(__dirname, fn), contents)
}

function sources() {
  return (
    fs.readdirSync(path.join(__dirname, 'source'))
      .filter(f => f.substr(-3) === '.md')
      .map(f => path.basename(f, '.md'))
  )
}

function generate(feature) {
  let template = load('templates/index.html') // TODO: do not reload unnecessarily
  let dom = new JSDOM(template),
    document = dom.window.document,
    $ = document.querySelector.bind(document)

  let md = load(`source/${feature}.md`)

  let contents = marked(md)
  let docmain = $('main')

  if (docmain) {
    docmain.innerHTML = contents
  }


  let title = ($('main h1') || {}).textContent
  if (title) {
    document.querySelector('title').insertAdjacentHTML('afterbegin', `${title} – `)
  }
  console.log(document.title)


  save(`docs/${feature}.html`, prettier.format(dom.serialize(), { parser: 'html' }))
}
