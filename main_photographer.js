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
    // totalLikesElement.innerHTML = value;

    totalLikesElement.textContent = value;
}


// afficher un objet avec la key ID

fetch('./data_photographers.json')
    .then(data => data.json())
    .then(result => {
        const photographList = result.photographers;
        // console.log(photographList);

        
        


        const activePhotographer = photographList.filter(photographers => photographers.id === useId)[0];
        // console.log(activePhotographer);
        const photographerDetail = new Photographe(activePhotographer.name, activePhotographer.id, activePhotographer.city,activePhotographer.country, activePhotographer.tags, activePhotographer.tagline, activePhotographer.price, activePhotographer.portrait);
        photographerDetail.render();
        const nameOfPhotographer= document.getElementById('nameofphotographer')
        nameOfPhotographer.innerHTML = "Contactez moi <br>" + activePhotographer.name;

        

        


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
       

        });

        // console.log(imageVideoList);
        const newLightbox = new Lightbox(imageVideoList);
        imageVideoList.forEach(el => el.render());
        // sortbyLike
        document.getElementById("popular").addEventListener("click", sortbyLike)
        document.getElementById("popular").addEventListener("keydown", sortbyLike) //ajouter touche
        //sortByDate
        document.getElementById("date").addEventListener("click", sortByDate)
        document.getElementById("date").addEventListener("keydown", sortByDate)

        //sortByName
        document.getElementById("titre").addEventListener("click", sortByTitle)
        document.getElementById("titre").addEventListener("keydown", sortByTitle)


        updateTotalLike(getTotalLike());

        
        
    });
        

        
    
        
    

    
 



// FILTER MEDIAS
 console.log(imageVideoList)






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





// ADD KEYBOARD NAVIGATION in lightbox



// CONTACT BUTTON

// RECUP TAG dans l'URL //

//index.html?tag="+tagid"+this.???



    const myUrl = new URL(window.location);
    const searchTag = new URLSearchParams (url.search);
    const useTag = String(searchParams.get("tag"));
    console.log(useTag);
// console.log(myUrl);



// DROPDOWN//

const dropbtn = document.querySelector('#options-view-button');
const chevronUp = document.querySelector('.fa-chevron-up');
const chevronDown = document.querySelector('.fa-chevron-down');

// let isVisible = false;

dropbtn.addEventListener('click', () => {
    chevronDown.classList.toggle('invisible');
    chevronUp.classList.toggle('visible');


});

document.querySelector("#select-box").addEventListener('keydown', (e) => {
    if ( e.key === "Escape") {
        console.log("echap")
        document.getElementById("options").style.display = "none"
    }

})

