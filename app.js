
/* ===== 1. GET FORM ELEMENTS ===== */

const form = document.getElementById("signup-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const frequencyInput = document.getElementById("frequency");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const frequencyError = document.getElementById("frequency-error");

const formMessage = document.getElementById("form-message");


/* ===== 2. DISPLAY ERROR MESSAGES ===== */

function showError(field, errorElement, message) {

    errorElement.textContent = message;

    field.setAttribute("aria-invalid", "true");
}


/* ===== 3. CLEAR ERROR MESSAGES ===== */

function clearError(field, errorElement) {

    errorElement.textContent = "";

    field.removeAttribute("aria-invalid");
}


/* ===== 4. FORM SUBMISSION ===== */

form.addEventListener("submit", function(event) {

    // Stop the page from reloading
    event.preventDefault();

    // Remove any previous success message
    formMessage.textContent = "";
    formMessage.classList.remove("success");

    // Get the entered values and remove extra spaces
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const frequency = frequencyInput.value.trim();

    // Keep track of the first invalid field
    let firstInvalidField = null;


    /* ===== 5. VALIDATE NAME ===== */

    if (name === "") {

        showError(
            nameInput,
            nameError,
            "Enter your name."
        );

        firstInvalidField = nameInput;

    } else {

        clearError(nameInput, nameError);
    }


    /* ===== 6. VALIDATE EMAIL ===== */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Enter your email address."
        );

        if (firstInvalidField === null) {
            firstInvalidField = emailInput;
        }

    } else if (!emailPattern.test(email)) {

        showError(
            emailInput,
            emailError,
            "Enter an email address like name@example.com."
        );

        if (firstInvalidField === null) {
            firstInvalidField = emailInput;
        }

    } else {

        clearError(emailInput, emailError);
    }


    /* ===== 7. VALIDATE FREQUENCY ===== */

    if (frequency === "") {

        showError(
            frequencyInput,
            frequencyError,
            "Choose how often we should email you."
        );

        if (firstInvalidField === null) {
            firstInvalidField = frequencyInput;
        }

    } else {

        clearError(frequencyInput, frequencyError);
    }


    /* ===== 8. FOCUS FIRST INVALID FIELD ===== */

    if (firstInvalidField !== null) {

        firstInvalidField.focus();

        return;
    }


    /* ===== 9. DISPLAY SUCCESS MESSAGE ===== */

    formMessage.textContent =
        `Thank you, ${name}! You're on the mailing list.`;

    formMessage.classList.add("success");


    /* ===== 10. CLEAR FORM ===== */

    form.reset();

});
