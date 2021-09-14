import {Photographe} from "./class/Photographe.js";
import {Media, Image, Video, Lightbox} from "./class/media.js";


// RECUP ID dans l'URL // WINDOW.LOCATION



const queryParam_url_id = window.location.search;
console.log(queryParam_url_id); //??id

const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
const useId = Number(searchParams.get("id"));
const photographerElement = document.querySelector('#photographer');
const photographerPrice = document.getElementById('sum-price-likes__price');

const imageVideoList = []; // créé un nouveau tableau pour manipuler les médias
console.log(imageVideoList);

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

fetch('/data_photographers.json')
    .then(data => data.json())
    .then(result => {
        const photographList = result.photographers;
        // console.log(photographList);

        
        


        const activePhotographer = photographList.filter(photographers => photographers.id === useId)[0];
        // console.log(activePhotographer);
        const photographerDetail = new Photographe(activePhotographer.name, activePhotographer.id, activePhotographer.city,activePhotographer.country, activePhotographer.tags, activePhotographer.tagline, activePhotographer.price, activePhotographer.portrait);
        photographerDetail.render();
        


       const mediaList = result.media;
    //    console.log(mediaList.indexOf);
    //    console.log(mediaList);

        const activeMedia = mediaList.filter(media => media.photographerId === useId);
        // console.log(activeMedia);

        activeMedia.forEach(element => { 
            const firstName = photographerDetail.name.split(" ")[0];
            const price = photographerDetail.price;
            // console.log(firstName);
            console.log(price);
            const getPrice = document.getElementById("sum-price-likes__price");
            getPrice.textContent = price + "€";

            
//add function if Image =>
        if (element.image){
            const mediaSrc = `Sample Photos/${firstName}/${element.image}`;

            const newMedia = new Image(element.id,element.photographerId, element.title, mediaSrc, element.tags, element.likes, element.date, element.price);
            //newMedia.render();
            imageVideoList.push(newMedia); //ajoute les nouvelles données au tableau créé 

          
            
        }else{ 
            const mediaSrc = `Sample Photos/${firstName}/${element.video}`;

            const newMedia = new Video(element.id,element.photographerId, element.title, mediaSrc, element.tags, element.likes, element.date, element.price);
            //newMedia.render();
            imageVideoList.push(newMedia); //ajoute les nouvelles données au tableau créé 

        }
       
        // const newLightbox = new Lightbox (imageVideoList, element.id);
        // newLightbox.render();

        });

        // console.log(imageVideoList);
        const newLightbox = new Lightbox(imageVideoList);
        imageVideoList.forEach(el => el.render());

        
    
        
    

    
 



// FILTER MEDIAS
 console.log(imageVideoList);

// get tags

// add toggle to remove?

// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
// Show filtered elements
// Hide elements that are not selected
// Add active class to the current control button (highlight it)

/// filter by tags










// SORT OUT MEDIAS

/// filter/sort out by likes

// imageVideoList.sort(function(a,b){
//     return a.likes - b.likes;
//     console.log(imageVideoList);
// });

/// filter/sort out by date

// imageVideoList.sort(function(a,b){
//     const dateA = new Date(a.date), dateB = new Date(b.date);
//     return dateA - dateB;
// })

/// filter/sort out by Name

//  imageVideoList.sort(function(a,b){
//      const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
//      if (titleA < titleB) return -1;
//      if (titleA > titleB) return 1;
//     return 0;

//  });


// filterMedia("popular")
// function filterMedia(c) {
//     const x,i;
//     x = document.getElementsByClassName("option");
//     if (c == "popular")

// }

});




//LIGHTBOX
// méthodes de navigation et open/close
// class Lightbox
// + render




// CONTACT BUTTON

