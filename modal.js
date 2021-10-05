// DOM ELEMENTS

const modal = document.querySelector('#modal-form');
const modalBtn = document.querySelectorAll('.btn-form');
const btnClose = document.getElementById("btnClose");


// FORM DOM ELEMENTS
const formData = document.querySelectorAll(".formData");
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

//CLOSE FORM ON X

function closeModal() {
    modal.style.display = "none";
  }
  
  
  btnClose
    .addEventListener("click", closeModal
  
  
    );

    document.addEventListener("keydown", closeModal)
    console.log("HEllo");
  
    // focus //



//VALIDATION

const isFirstValid = () => {
    const value = firstNameInput.value;
    //Si le nom fait moins de 2 caractères
    if (value.trim().length >= 2) {
        formData[0].setAttribute("data-error-visible", "false")
      return true;
    } else {
      //Une erreur est survenue
      formData[0].setAttribute("data-error", "Veuillez renseigner votre prénom")
      formData[0].setAttribute("data-error-visible", "true")
  
      return false;
  
    }
  }
  
  const isLastValid = () => {
    const value = lastNameInput.value;
    //Si le nom fait moins de 2 caractères
    if (value.trim().length >= 2) {
   formData[1].setAttribute("data-error-visible", "false")
      return true;
    } else {
      //Une erreur est survenue
      formData[1].setAttribute("data-error", "Veuillez renseigner votre nom")
      formData[1].setAttribute("data-error-visible", "true")
  
      return false;
  
    }
  }
  
  const isEmailValid = () => {
    const value = email.value;
    let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      if (email.value.trim().match(regexEmail)) {
        formData[2].setAttribute("data-error-visible", "false")
          return true; 
    } else {
        formData[2].setAttribute("data-error", "Veuillez renseigner une adresse email valide")
        formData[2].setAttribute("data-error-visible", "true")
  
      return false
  
  
    }
  
  }

  const isMessageValid =()=> {
      const value = message.value;
      if (value.trim().length > 0) {
        formData[3].setAttribute("data-error-visible", "false")
           return true;
         } else {
           //Une erreur est survenue
           formData[3].setAttribute("data-error","Renseignez votre message")
           formData[3].setAttribute("data-error-visible", "true")
       
           return false;

  }
}

  // ALL FIELDS VERIFICATION



// ALL FIELDS form VALIDATION (Vérification de tous les champs)

modal.addEventListener("submit", function (e) {
    e.preventDefault(); //Bloque le rafraichissement de la page//
  
    const validFirstName = isFirstValid();
    const validLastName = isLastValid();
    const validEmail = isEmailValid();
    
    if (
      validFirstName && validLastName &&  validEmail ) {
      launchModal()
      document.querySelector('form').reset(); //Efface les champs après soumission//
      closeModal();
      launchValidationModal() // lance le message de confirmation//
  
    } else {
      return false
    }
});



  

function launchValidationModal() {
    window.alert("Ok");
}