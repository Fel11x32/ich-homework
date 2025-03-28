const navMenu = document.getElementById('navMenu')
const openButton = document.getElementById('openButton')
const closeButton = document.getElementById('closeButton')

const toggleMenu = () => {
	navMenu.classList.toggle('nav-menu--open')
}

openButton.addEventListener('click', e => {
	e.stopPropagation()
	toggleMenu()
})

closeButton.addEventListener('click', e => {
	e.stopPropagation()
	toggleMenu()
})

document.body.addEventListener('click', () => {
	if (navMenu.classList.contains('nav-menu--open')) {
		navMenu.classList.remove('nav-menu--open')
	}
})

const navItems = document.querySelectorAll('.nav-menu__item')
navItems.forEach(item => {
	item.addEventListener('click', function (e) {
		e.stopPropagation()
		const subMenu = this.querySelector('.sub-menu')
		if (subMenu) {
			subMenu.classList.toggle('sub-menu--open')
		}
	})
})
