const ageInput = document.getElementById('age-input');
const donationInput = document.getElementById('donation-input');
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
    const donation = donationInput.value;

    // validation
    if (ageInput.value === '' || donationInput.value === '') {
        errorMessage.innerHTML = `Please enter both age and a donation (you can add $0)`;

    }
    // first check if age is greater or equal to 18
    else if (age >= 18) {
        modalContent.innerHTML = `<p>Congrats - you're old enough to vote!</p>
        <p>You donated $${donationInput.value}.</p>
        `;
        toggleModal();
        // at this point we can assume the age is less than 18, because it did not pass the above if statement
        // check if the donation is greater than 0
    } else if (donation > 0) {
        modalContent.innerHTML = "Thanks for donating! Unfortunately, you can't vote. But we'll take your money anyway!";
        toggleModal();
    }
    // at this point we can assume the age is less than 18, and their donation is 0
    else {
        errorMessage.innerHTML = `Unfortunately, you're not old enough to vote.`;
    }
}

submitBtn.addEventListener('click', submit);

closeBtn.addEventListener('click', () => {
    errorMessage.innerHTML = '';
    toggleModal();
});
