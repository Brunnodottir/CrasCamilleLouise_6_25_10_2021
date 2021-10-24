import {Photographe} from "./class/Photographe.js";
import {Media, Image, Video, Lightbox} from "./class/media.js";


// RECUP ID dans l'URL //


const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
const useId = Number(searchParams.get("id"));


const imageVideoList = []; // crée un nouveau tableau pour manipuler les médias

export function getTotalLike() {
    let sum = 0;
    imageVideoList.forEach((media) => {
        sum = sum + media.likes;
    });

    return sum;

}

export function updateTotalLike(value){
    const totalLikesElement = document.querySelector('.total-likes__sum');
    totalLikesElement.textContent = value;
}


// afficher un objet avec la key ID

fetch('./data_photographers.json')
    .then(data => data.json())
    .then(result => {
        const photographList = result.photographers;

        
        


        const activePhotographer = photographList.filter(photographers => photographers.id === useId)[0];
        const photographerDetail = new Photographe(activePhotographer.name, activePhotographer.id, activePhotographer.city,activePhotographer.country, activePhotographer.tags, activePhotographer.tagline, activePhotographer.price, activePhotographer.portrait);
        photographerDetail.render();
        const nameOfPhotographer= document.getElementById('nameofphotographer')
        nameOfPhotographer.innerHTML = "Contactez moi <br>" + activePhotographer.name;

        

        


       const mediaList = result.media;
       const activeMedia = mediaList.filter(media => media.photographerId === useId);

        activeMedia.forEach(element => { 
            const firstName = photographerDetail.name.split(" ")[0];
            const price = photographerDetail.price;
            const getPrice = document.getElementById("sum-price-likes__price");
            getPrice.textContent = price + "€";

            
//add function if Image =>
        if (element.image){
            const mediaSrc = `Sample Photos/${firstName}/${element.image}`;

            const newMedia = new Image(element.id,element.photographerId, element.title, mediaSrc, element.tags, element.likes, element.date, element.price);
            imageVideoList.push(newMedia); //ajoute les nouvelles données au tableau créé 

          
            
        }else{ 
            const mediaSrc = `Sample Photos/${firstName}/${element.video}`;

            const newMedia = new Video(element.id,element.photographerId, element.title, mediaSrc, element.tags, element.likes, element.date, element.price);
            imageVideoList.push(newMedia); //ajoute les nouvelles données au tableau créé 

        }
       

        });

        const newLightbox = new Lightbox(imageVideoList);

        imageVideoList.forEach(el => el.render());
        // sortbyLike
        document.getElementById("popular").addEventListener("click", sortbyLike)
        document.getElementById("popular").addEventListener("keydown", sortbyLike)
        //sortByDate
        document.getElementById("date").addEventListener("click", sortByDate)
        document.getElementById("date").addEventListener("keydown", sortByDate)
        //sortByName
        document.getElementById("titre").addEventListener("click", sortByTitle)
        document.getElementById("titre").addEventListener("keydown", sortByTitle)


        updateTotalLike(getTotalLike());

        
        
    });
        







function sortbyLike() 

{

    //1. shoot previous media data
    document.getElementById("medias").innerHTML = "";
    //2. sort by likes
    imageVideoList.sort(function(a,b){
        return b.likes - a.likes;
    });
    //3. display by likes
    imageVideoList.forEach(el => el.render());
}

function sortByDate()
{
    document.getElementById("medias").innerHTML = "";
    imageVideoList.sort(function(a,b){
        const dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });
    imageVideoList.forEach(el => el.render());


}

function sortByTitle()
{
    document.getElementById("medias").innerHTML = "";
    imageVideoList.sort(function(a,b){
        const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
       return 0;
    });
    imageVideoList.forEach(el => el.render());




}






// DROPDOWN//

const dropbtn = document.querySelector('#options-view-button');
const chevronUp = document.querySelector('.fa-chevron-up');
const chevronDown = document.querySelector('.fa-chevron-down');


document.getElementById('dropdown').addEventListener("change", function(e){
    console.log(e.target.value);
    if ( e.target.value === "popular") {
        sortbyLike();
    }
    if ( e.target.value === "date") {
        sortByDate();
    }
    if ( e.target.value === "titre") {
        sortByTitle();
    }


}) 

// dropbtn.addEventListener('click', () => {
//     chevronDown.classList.toggle('invisible');
//     chevronUp.classList.toggle('visible');


// });

// document.querySelector("#select-box").addEventListener('keydown', (e) => {
//     if ( e.key === "Escape") {
//         console.log("echap")
//         document.getElementsById("app-cover").style.display = "none"
//     }

// })

// function DropDown(dropDown) {
//     const [toggler, menu] = dropDown.children;
    
//     const handleClickOut = e => {
//       if(!dropDown) {
//         return document.removeEventListener('click', handleClickOut);
//       }
      
//       if(!dropDown.contains(e.target)) {
//         this.toggle(false);
//       }
//     };
    
//     const setValue = (item) => {
//       const val = item.textContent;
//       toggler.textContent = val;
//       this.value = val;
//       this.toggle(false);
//       dropDown.dispatchEvent(new Event('change'));
//       toggler.focus();
//     }
    
//     const handleItemKeyDown = (e) => {
//       e.preventDefault();
//       if(e.keyCode === 38 && e.target.previousElementSibling) { // up
//         e.target.previousElementSibling.focus();
//       } else if(e.keyCode === 40 && e.target.nextElementSibling) { // down
//         e.target.nextElementSibling.focus();
//       } else if(e.keyCode === 27) { // escape key
//         this.toggle(false);
//       } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
//         setValue(e.target);
//       }
//     }
  
//     const handleToggleKeyPress = (e) => {
//       e.preventDefault();
  
//       if(e.keyCode === 27) { // escape key
//         this.toggle(false);
//       } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
//         this.toggle(true);
//       }
//     }
    
//     toggler.addEventListener('keydown', handleToggleKeyPress);
//     toggler.addEventListener('click', () => this.toggle());
//     [...menu.children].forEach(item => {
//       item.addEventListener('keydown', handleItemKeyDown);
//       item.addEventListener('click', () => setValue(item));
//     });
    
//     this.element = dropDown;
    
//     this.value = toggler.textContent;
    
//     this.toggle = (expand = null) => {
//       expand = expand === null
//         ? menu.getAttribute('aria-expanded') !== 'true'
//         : expand;
  
//       menu.setAttribute('aria-expanded', expand);
      
//       if(expand) {
//         toggler.classList.add('active');
//         menu.children[0].focus();
//         document.addEventListener('click', handleClickOut);
//         dropDown.dispatchEvent(new Event('opened'));
//       } else {
//         toggler.classList.remove('active');
//         dropDown.dispatchEvent(new Event('closed'));
//         document.removeEventListener('click', handleClickOut);
//       }
//     }
//   }
  
//   const dropDown = new DropDown(document.querySelector('.dropdown'));
    
//   dropDown.element.addEventListener('change', e => {
//     console.log('changed', dropDown.value);
//   });
  
//   dropDown.element.addEventListener('opened', e => {
//     console.log('opened', dropDown.value);
//   });
  
//   dropDown.element.addEventListener('closed', e => {
//     console.log('closed', dropDown.value);
//   });
  
//   dropDown.toggle();

