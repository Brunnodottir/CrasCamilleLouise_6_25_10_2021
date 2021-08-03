// DOM ELEMENTS

const modal = document.querySelector('.form-container');
const modalBtn = document.querySelectorAll('.btn-form');
const btnClose = document.getElementById("close-button");


// FORM DOM ELEMENTS

const firstNameInput = document.getElementById("prenom");
const lastNameInput = document.getElementById("nom");
const email = document.getElementById("email");
const yourMessage = document.getElementById("message");


// CONFIRM FORM DOM ELEMENTS

const confirmModal = document.querySelector(".confirm-modal-submit");
const btnSubmit = document.getElementById("btn-submit");
const btnCloseSubmit = document.getElementsByClassName (".close-submit");
const bntConfirm = document.getElementById("btn-confirm");


//LAUNCH MODAL FORM

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal(){
    modal.style.display ="block";
}