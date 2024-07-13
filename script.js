let loginModal = document.getElementById('login_modal');
let myGarageBtn = document.getElementById("login_li");
let exitBtn = document.getElementById('exit_modal');

myGarageBtn.addEventListener('click', function() {
  loginModal.classList.add('modal_visible');
})

exitBtn.addEventListener('click', function() {
  loginModal.classList.remove('modal_visible');
})