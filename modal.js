// DOM ELEMENTS

const modal = document.querySelector('#modal-form');
const modalBtn = document.querySelectorAll('.btn-form');
const btnClose = document.getElementById("btnClose");


// FORM DOM ELEMENTS
const formData = document.querySelectorAll(".formData");
const firstNameInput = document.getElementById("prenom");
const lastNameInput = document.getElementById("nom");
const email = document.getElementById("email");


// CONFIRM FORM DOM ELEMENTS


modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal(){
    modal.style.display ="flex";


}

//CLOSE FORM ON X

function closeModal() {
    modal.style.display = "none";
  }
  
  
  btnClose
    .addEventListener("click", closeModal
  
  
    );

   document.addEventListener("keydown", (event) =>{
     if (event.key ==="Escape"){
       closeModal()
     }
   })





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
    let regexEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,63})$/;
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
           formData[3].setAttribute("data-error","Veillez renseigner votre message")
           formData[3].setAttribute("data-error-visible", "true")
       
           return false;

  }
}




// ALL FIELDS form VALIDATION (Vérification de tous les champs)

modal.addEventListener("submit", function (e) {
    e.preventDefault(); //Bloque le rafraichissement de la page//
  
    const validFirstName = isFirstValid();
    const validLastName = isLastValid();
    const validEmail = isEmailValid();
    const validMessage = isMessageValid();
    
    if (
      validFirstName && validLastName &&  validEmail && validMessage ) {
      launchModal()
      document.querySelector('form').reset(); //Efface les champs après soumission//
      closeModal();
      launchValidationModal() // lance le message de confirmation//
  
    } else {
      return false
    }
});



  

function launchValidationModal() {
    window.alert("Votre message a bien été envoyé!");
}