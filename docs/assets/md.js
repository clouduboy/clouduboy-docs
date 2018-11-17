document.querySelector('main').innerHTML = marked(
  document.querySelector('main + template').innerHTML.trim()
);
