let openModalBtns = document.querySelectorAll('.modal_btn');
const modal1 = document.getElementById('modal-1');
const modalOverlay = document.querySelector('.overlay');
const exitBtn = document.querySelector('#x-btn');
const pageBody = document.querySelector('#modals');

for (let i = 0; i < openModalBtns.length; i++) {
	openModalBtns[i].addEventListener('click', function () {
		modal1.classList.remove('hidden');
		modalOverlay.classList.remove('hidden');
	});
}

exitBtn.addEventListener('click', function () {
	modal1.classList.add('hidden');
	modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', function () {
	modal1.classList.add('hidden');
	modalOverlay.classList.add('hidden');
});
