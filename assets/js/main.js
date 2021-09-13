const btn = document.querySelector('#btn')
const sidebar = document.querySelector('.sidebar')
const searchBtn = document.querySelector('#search-icon')

const changeClass = (el, method, className) => el.classList[method](className)

btn.addEventListener('click', () => {
	changeClass(sidebar, 'toggle', 'active')
})

searchBtn.addEventListener('click', () => {
	changeClass(sidebar, 'toggle', 'active')
})
