let openModalBtns = document.querySelectorAll('.modal_btn');
const modal1 = document.getElementById('modal-1');
const modalOverlay = document.querySelector('.overlay');
const exitBtn = document.querySelector('#x-btn');
const pageBody = document.querySelector('#modals');

const openModal = function () {
	modal1.classList.remove('hidden');
	modalOverlay.classList.remove('hidden');
};

const closeModal = function () {
	modal1.classList.add('hidden');
	modalOverlay.classList.add('hidden');
};

for (let i = 0; i < openModalBtns.length; i++) {
	openModalBtns[i].addEventListener('click', openModal);
}

exitBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', closeModal);

const escapeBtn = document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
		closeModal();
	}
});
