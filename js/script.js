const ageInput = document.getElementById('age-input');
const submitBtn = document.getElementById('submit-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close');
const errorMessage = document.getElementById('error-message');

function toggleModal() {
    modalOverlay.classList.toggle('active');
    modal.classList.toggle('active');
}

function submit() {
    const age = ageInput.value;

    if (age >= 18) {
        toggleModal();
        modalContent.innerHTML = `<p>Congrats - you're old enough to vote!</p>`;
    } else {
        errorMessage.innerHTML = `Unfortunately, you're not old enough to vote.`;
    }
}

submitBtn.addEventListener('click', submit);

closeBtn.addEventListener('click', () => {
    errorMessage.innerHTML = '';
    toggleModal();
});
