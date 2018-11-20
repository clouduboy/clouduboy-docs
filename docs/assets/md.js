/* toggle navigation bar in mobile view */
document.querySelector('.pagenav').addEventListener('click', e => e.target.className === 'pagenav' ? e.target.classList.toggle('open') : null)
