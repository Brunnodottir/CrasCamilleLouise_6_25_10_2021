import { Photographe} from "./class/Photographe.js"

////// TEMPLATE PHOTOGRAPHERS


fetch('./data_photographers.json')
    .then(data => data.json())
    .then(result => {
        const photographList = result.photographers;
        const tags = document.querySelectorAll(".photographer__tags__tag");
        const artistList = []; // crée un nouveau tableau pour les photographes

      

        for (let i = 0 ; i < photographList.length ; i++) {
          console.log(photographList);
          const photographer = new Photographe( photographList[i].name, photographList[i].id, photographList[i].city, photographList[i].country, photographList[i].tags, " ' " + photographList[i].tagline + " ' ",photographList[i].price + "€", photographList[i].portrait );
            artistList.push(photographer);
            
        }

        const myUrl = new URL(window.location);
        const searchTag = new URLSearchParams (myUrl.search);
        const useTag = searchTag.get("tag");

        if (useTag !== null ) {
            const filteredByTagArtist = artistList.filter((artist) => {
                return artist.tags.includes(useTag);
    
            })
            document.querySelector("main").innerHTML ="";
            for (let i =0; i<filteredByTagArtist.length; i++)


                filteredByTagArtist[i].render();
            }else{
                for (let i =0; i< artistList.length ; i++){
                    artistList[i].render()
                    console.log(artistList[i]);
                }
            }

        
        


        tags.forEach(tag => {
            tag.addEventListener('click', e => {
           const tagBtn = e.target.getAttribute("data-value"); 
           const filteredArtist = artistList.filter((artist) => {
            return artist.tags.includes(tagBtn);

        })
    console.log(filteredArtist);
    document.querySelector("main").innerHTML = ""
    for ( let i = 0; i<filteredArtist.length; i++) {
        filteredArtist[i].render();
    }

         
           
        })
        
    })





    });







// BOUTON CONTENU

// Initial visibility set to "none"
 
const btnContentUp = document.getElementById("btn-content");
 
btnContentUp.style.display = "none";
 
 
 
// Visibility set to "block" when scrolling
 
window.addEventListener("scroll", function(){
 
	if(window.scrollY > 100){
 
		btnContentUp.style.display = "block";
        console.log("test"); //add limit
	}
	else{
 
		btnContentUp.style.display = "none";
	}
}, false);


