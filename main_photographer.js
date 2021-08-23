import {Photographe} from "./class/Photographe.js";
import {Media, Image, Video} from "./class/media.js";

// RECUP ID dans l'URL // WINDOW.LOCATION



const queryParam_url_id = window.location.search;
console.log(queryParam_url_id); //??id

const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
const useId = Number(searchParams.get("id"));
const photographerElement = document.querySelector('#photographer');
const photographerPrice = document.getElementById('sum-price-likes__price');

const imageVideoList = []; // créé un nouveau tableau pour manipuler les médias



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
    //    console.log(mediaList);

        const activeMedia = mediaList.filter(media => media.photographerId === useId);
        // console.log(activeMedia);

        activeMedia.forEach(element => { 
            const firstName = photographerDetail.name.split(" ")[0];
            // console.log(firstName);
            
//add function if Image =>
        if (element.image){
            const mediaSrc = `Sample Photos/${firstName}/${element.image}`;

            const newMedia = new Image(element.id,element.photographerId, element.title, mediaSrc, element.tags, element.likes, element.date, element.price);
            newMedia.render();
            imageVideoList.push(newMedia); //ajoute les nouvelles données au tableau créé 

          
            
        }else{ 
            const mediaSrc = `Sample Photos/${firstName}/${element.video}`;

            const newMedia = new Video(element.id,element.photographerId, element.title, mediaSrc, element.tags, element.likes, element.date, element.price);
            newMedia.render();
            imageVideoList.push(newMedia); //ajoute les nouvelles données au tableau créé 


        }
        

           
        // const photographerPrice = photographerDetail.price;
        // console.log(photographerPrice);
      


        
        });
        
        


        const btnHeart = document.querySelectorAll('.fa-heart');
        const nbrLike = document.querySelectorAll('.media_numberoflikes');
        const likeTotal = document.querySelectorAll('#sum-price-likes__price');
        const value = nbrLike.innerHTML;

          // définir valeur du like (media.likes)
      
          // définir la valeur de tous les likes du photographe (addition de tous les likes media)

        
    //     function incrementBtn(like){
    //         this.likes.push(like);
    //         let sum = 0;
    //         for(let like of this.likes){
    //         sum += like;
        
    //     }
    // }
        //     
        //    
        //

        
      

        btnHeart.forEach((like) => {
            const mediaLikes = activeMedia.likes; // calculer tout les likes media //
            console.log(mediaLikes);
        
            like.addEventListener("click", function(){
                console.log("<3");
                // 
                // incrementBtn();
            
                
        })




       
        })

        
        
        

    
    });


// TRIER PAR


// tableauDesTags = [
//     portrait,
//     art,
//     fashion,
//     architecture,
//     travel,
//     sport,
//     animals,
//     events,
//   ];


// //afficher seuelement les photographes ayant le même tag
// const affichageParTag = async () => {
//   await triPhotographe();
//   console.log(tableauDesTags);
// };

//LIGHTBOX





// CONTACT BUTTON

