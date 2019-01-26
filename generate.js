const fs = require('fs')
const path = require('path')

const { JSDOM } = require('jsdom'),
  marked = require('marked'),
  prettier = require('prettier')


const sourceList = sources()

const nav = navigation(sourceList)

sourceList.forEach(src => generate({ nav, src }))


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

function navigation(sourceList) {
  return sourceList.map(
    src => `<li><a href="/${src}">${src}</a></li>`
  ).join('\n')
}

function generate({ nav, src }) {
  let template = load('templates/index.html') // TODO: do not reload unnecessarily
  let dom = new JSDOM(template),
    document = dom.window.document,
    $ = document.querySelector.bind(document)


  // Generate navigation
  let navlist = $('.pagenav ul')

  navlist.insertAdjacentHTML('beforeend', nav)


  // Generate main content
  let md = load(`source/${src}.md`)

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


  save(`docs/${src}.html`, prettier.format(dom.serialize(), { parser: 'html' }))
}
