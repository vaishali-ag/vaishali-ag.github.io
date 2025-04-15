const openBtn = document.getElementById('openFormBtn');
const popupForm = document.getElementById('popupForm');

openBtn.addEventListener('click', () => {
  popupForm.classList.toggle('active');
});

function closeForm() {
  popupForm.classList.remove('active');
}
