const contactForm = document.querySelector(".contact-form");
const errorMessage = document.querySelector("#error-message");
const formSubmissionMessage = document.querySelector("#form-Submission-Message");

const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");


const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");


function contactFormValidator(event){
    try{
        event.preventDefault();

        if(valueLength(name.value, 1) === true) {
            nameError.style.display = "none";
        }
        else {
            nameError.style.display = "block";
        }

        if(emailValidate(email.value) === true) {
            emailError.style.display = "none";
        }
        else {
            emailError.style.display = "block";
        }

        if(subject.value === "Please select an option") {
            subjectError.style.display = "block";
        }
        else {
            subjectError.style.display = "none";
        }

        if(valueLength(message.value, 5) === true) {
            messageError.style.display = "none";
        }
        else {
            messageError.style.display = "block";
        }
    }
    catch (error){
        console.log(error);
        errorMessage.innerHTML = error;
    }
}

function formSubmission(){
    if (valueLength(name.value, 1) && emailValidate(email.value) && subject.value !== "Please select an option" && valueLength(message.value, 5)){
        formSubmissionMessage.innerHTML = '<div class="submission-success">Your form has been submitted.</div>';
    }
    else {
        formSubmissionMessage.innerHTML = '<div class="submission-fail">Your form does not meet the requirement.</div>';
    }
}

contactForm.addEventListener("submit", contactFormValidator);
contactForm.addEventListener("submit", formSubmission);

function valueLength(value, inputLength){
    if (value.trim().length >= inputLength){
        return true;
    } 
    else {
        return false;
    }
}

//Reference: Email address validation pattern from https://regexr.com/3e48o
//Reference: function structure from https://content.noroff.dev/javascript-1/form-validation.html#regular-expressions
function emailValidate(email) {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailPatternCheck = emailPattern.test(email);
    return emailPatternCheck;
}
