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

