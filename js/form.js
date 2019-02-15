const submitBtn = document.querySelector(".form-submit");
const nameInp = document.querySelector(".form-name");
const emailInp = document.querySelector('.form-email');
const telInp = document.querySelector('.form-tel');
const msgArea = document.querySelector('textarea');

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const telError = document.querySelector(".tel-error");
const msgError = document.querySelector(".msg-error");


const nameReg = /^[a-zA-Z]{3,}/;
const emailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
const telReg = /^[0-9\+]{8,13}$/;

submitBtn.addEventListener('click',function(e) {

if(nameReg.test(nameInp.value)) {
    nameError.textContent = ""; 
}
else {
    e.preventDefault();
    nameError.textContent = "Wrong value !";
}
if(emailReg.test(emailInp.value)) {
    emailError.textContent = ""; 
}
else {
    e.preventDefault();
    emailError.textContent = "Wrong value !";
}
if(telReg.test(telInp.value)) {
    telError.textContent = ""; 
}
else {
    e.preventDefault();
    telError.textContent = "Wrong value !";
}
if(msgArea.value == ""){
    e.preventDefault();
    msgError.textContent= "Message can't be empty!"
}
else {
    msgError.textContent = "";
}



})