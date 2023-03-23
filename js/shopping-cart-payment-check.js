const checkout = document.querySelector("#checkout");
const errorMessage = document.querySelector("#error-message");
const checkoutMessage = document.querySelector("#checkout-Message");

const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name-error");

const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-name-error");

const phoneNumber = document.querySelector("#phone-number");
const phoneNumberError = document.querySelector("#phone-number-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");


const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");

const country = document.querySelector("#country");
const countryError = document.querySelector("#country-error");

const postalCode = document.querySelector("#postal-code");
const postalCodeError = document.querySelector("#postal-code-error");


function deliveryFormValidator(event){
    try{
        event.preventDefault();

        if(valueLength(firstName.value, 1) === true) {
            firstNameError.style.display = "none";
        }
        else {
            firstNameError.style.display = "block";
        }

        if(valueLength(lastName.value, 1) === true) {
            lastNameError.style.display = "none";
        }
        else {
            lastNameError.style.display = "block";
        }

        if(valueLength(phoneNumber.value, 1) === true) {
            phoneNumberError.style.display = "none";
        }
        else {
            phoneNumberError.style.display = "block";
        }

        if(emailValidate(email.value) === true) {
            emailError.style.display = "none";
        }
        else {
            emailError.style.display = "block";
        }

        if(valueLength(address.value, 1) === true) {
            addressError.style.display = "none";
        }
        else {
            addressError.style.display = "block";
        }

        if(valueLength(city.value, 1) === true) {
            cityError.style.display = "none";
        }
        else {
            cityError.style.display = "block";
        }

        if(valueLength(country.value, 1) === true) {
            countryError.style.display = "none";
        }
        else {
            countryError.style.display = "block";
        }

        if(valueLength(postalCode.value, 1) === true) {
            postalCodeError.style.display = "none";
        }
        else {
            postalCodeError.style.display = "block";
        }
    }
    catch (error){
        console.log(error);
        errorMessage.innerHTML = error;
    }
}

const errorMessageCard = document.querySelector("#error-message-Card");

const cardNumber = document.querySelector("#card-number");
const cardNumberError = document.querySelector("#card-number-error");

const expirationDate = document.querySelector("#expiration-date");
const expirationDateError = document.querySelector("#expiration-date-error");

const cvvCode = document.querySelector("#cvv-code");
const cvvCodeError = document.querySelector("#cvv-code-error");

function cardFormValidator(event){
    try{
        event.preventDefault();

        if(valueLength(cardNumber.value, 16) === true) {
            cardNumberError.style.display = "none";
        }
        else {
            cardNumberError.style.display = "block";
        }

        if(valueLength(expirationDate.value, 1) === true) {
            expirationDateError.style.display = "none";
        }
        else {
            expirationDateError.style.display = "block";
        }

        if(valueLength(cvvCode.value, 3) === true) {
            cvvCodeError.style.display = "none";
        }
        else {
            cvvCodeError.style.display = "block";
        }
    }
    catch (error){
        console.log(error);
        errorMessageCard.innerHTML = error;
    }
}


const cartPage = document.querySelector("checkout-success.html");

function formSubmission(){
    if (valueLength(firstName.value, 1) && valueLength(lastName.value, 1) && valueLength(phoneNumber.value, 1) && emailValidate(email.value) && valueLength(address.value, 1) && valueLength(city.value, 1) && valueLength(country.value, 1) && valueLength(postalCode.value, 1) && valueLength(cardNumber.value, 16) && valueLength(expirationDate.value, 1) && valueLength(cvvCode.value, 3)){
        location.href = "https://friendly-zuccutto-172753.netlify.app/checkout-success.html";
    }
    else {
        checkoutMessage.innerHTML = '<div class="submission-fail">Your form does not meet the requirement.</div>';
    }
}
console.log("We are nr 1");
checkout.addEventListener("click", deliveryFormValidator);
checkout.addEventListener("click", cardFormValidator);
checkout.addEventListener("click", formSubmission);

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