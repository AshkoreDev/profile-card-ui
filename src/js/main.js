const toggle = document.getElementById('cardToggle');
const social = document.getElementById('cardSocial');

function showSocial() {

	toggle.addEventListener('click', () => {

		if (social.classList.contains('animation')) {

			social.classList.add('down-animation');

			setTimeout(() => {
				social.classList.remove('down-animation');
			}, 1000);

		}
		social.classList.toggle('animation');
	});
}

window.addEventListener('load', showSocial);