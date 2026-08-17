(function () {
emailjs.init({
    publicKey: "xrjRv_dPKUX3qv8JO",
});
})();

window.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("form");
const submitButton = document.getElementById("submitForm");

form.noValidate = true;

form.addEventListener("reset", () => {
    document.getElementById("invalidName").innerHTML = "";
    document.getElementById("invalidEmail").innerHTML = "";
    document.getElementById("invalidPhone").innerHTML = "";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const validName = nameCheck();
    const validEmail = emailCheck();
    const validPhone = phoneCheck();

    if (!validName || !validEmail || !validPhone) {
    return;
    }

    formSubmit.disabled = true;
    formSubmit.textContent = "Sending...";

    emailjs
    .sendForm("service_3lxe5or", "template_etsx01k", this)
    .then(() => {
        console.log("SUCCESS!");

        form.innerHTML = `
        <p class="success-message">
            Thank you very much for your request. Your message has been sent!
        </p>
        `;
    })
    .catch((error) => {
        console.error("FAILED...", error);

        submitButton.disabled = false;
        submitButton.textContent = "Submit Form";

        alert(
        "Your message could not be sent. Please check your details and try again."
        );
    });
});
});

function nameCheck() {
const invalidName = document.getElementById("invalidName");
const nameFromForm = document.getElementById("name").value.trim();

invalidName.innerHTML = "";

if (nameFromForm.length === 0) {
    invalidName.style.color = "red";
    invalidName.innerHTML =
    "INVALID! Name CANNOT be blank.";

    return false;
}

if (!/^[A-Za-z\s'-]+$/.test(nameFromForm)) {
    invalidName.style.color = "red";
    invalidName.innerHTML = "INVALID! The name cannot contain numbers.";

    return false;
}

console.log(nameFromForm);
console.log(nameFromForm.length);

return true;
}

function emailCheck() {
const invalidEmail = document.getElementById("invalidEmail");
const emailFromForm = document.getElementById("email").value.trim();

invalidEmail.innerHTML = "";

if (emailFromForm.length === 0) {
    invalidEmail.style.color = "red";
    invalidEmail.innerHTML = "INVALID! Email address CANNOT be blank.";

    return false;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailFromForm)) {
    invalidEmail.style.color = "red";
    invalidEmail.innerHTML = "INVALID EMAIL ADDRESS!";

    return false;
}

console.log(emailFromForm);
console.log(emailFromForm.length);

return true;
}

function phoneCheck() {
const invalidPhone = document.getElementById("invalidPhone");
const phoneFromForm = document.getElementById("phone").value.trim();
const countryFromForm = document.getElementById("country").value;
const fullPhone = countryFromForm + phoneFromForm;

invalidPhone.innerHTML = "";

if (phoneFromForm.length === 0) {
    invalidPhone.style.color = "red";
    invalidPhone.innerHTML = "INVALID! Phone number CANNOT be blank.";

    return false;
}

if (!/^\d+$/.test(phoneFromForm)) {
    invalidPhone.style.color = "red";
    invalidPhone.innerHTML = "INVALID phone number. Letters are not allowed.";

    return false;
}

console.log(countryFromForm);
console.log(fullPhone);
console.log(phoneFromForm);
console.log(phoneFromForm.length);

return true;
}



// const form = document.getElementById("form");

// form.addEventListener("reset", () => {

//     document.getElementById("invalidName").innerHTML = "";
//     document.getElementById("invalidEmail").innerHTML = "";
//     document.getElementById("invalidPhone").innerHTML = "";
// })

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (
//         nameCheck() &&
//         emailCheck() &&
//         phoneCheck()
//     ) {
//         // document.getElementById("form").innerHTML = "Form submitted!"
//         form.innerHTML = "Form submitted!"
//     }

// })

// function nameCheck(){

// const invalidName = document.getElementById("invalidName");
//     invalidName.innerHTML = "";

// const nameFromForm = document.getElementById("name").value.trim();

//     if (nameFromForm.length === 0) {
//         invalidName.style.color = "red"
//         invalidName.innerHTML = "INVALID! Cannot be blank. Please reset the form"
//             return false;
//     }    

//     console.log (nameFromForm);
//     console.log (nameFromForm.length)

//     if (/[0-9]/.test(nameFromForm)) {
//         invalidName.style.color = "red"
//         invalidName.innerHTML = "INVALID! Cannot contain numbers"
//             return false;
//     }

//     return true;

// };

// function emailCheck() {

// const invalidEmail = document.getElementById("invalidEmail");

//     invalidEmail.innerHTML = "";

// const emailFromForm = document.getElementById("email").value.trim();

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailFromForm)) {
//         invalidEmail.style.color = "red"
//         invalidEmail.innerHTML = "INVALID EMAIL ADDRESS!!!"

//         return false;
//     }

//     console.log (emailFromForm);
//     console.log (emailFromForm.length)

//     return true;
// };

// function phoneCheck() {

// const invalidPhone = document.getElementById("invalidPhone");

//     invalidPhone.innerHTML = "";

// const phoneFromForm = document.getElementById("phone").value.trim();
// const countryFromForm = document.getElementById("country").value;
// const fullPhone = countryFromForm + phoneFromForm;

//     if(phoneFromForm.length === 0 ) {
//         invalidPhone.style.color = "red"
//         invalidPhone.innerHTML = "INVALID Phone Number. CANNOT be blank!";
        
//         return false;
//     }

//     if (/[a-zA-Z]/.test(phoneFromForm)) {
//         invalidPhone.style.color = "red"
//         invalidPhone.innerHTML = "INVALID Phone Number. No letters!";
    
//         return false;
//     }

//     console.log(countryFromForm);
//     console.log(fullPhone);
//     console.log (phoneFromForm);
//     console.log (phoneFromForm.length)

//     return true;
// };
