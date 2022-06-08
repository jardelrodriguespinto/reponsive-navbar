const icon = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle')
let isTheMenuOpen = false;
icon.addEventListener("click", () => {
	toggle.classList.toggle('active')
	if (!isTheMenuOpen) {
		icon.classList.remove('icon2');
		icon.classList.add('icon')
		isTheMenuOpen = true;
	} else {
		icon.classList.remove('icon');
		icon.classList.add('icon2');
		isTheMenuOpen = false;
	}

});