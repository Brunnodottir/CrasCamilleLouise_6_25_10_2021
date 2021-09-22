import { Photographe} from "./class/Photographe.js"

////// TEMPLATE PHOTOGRAPHERS


fetch('/data_photographers.json')
    .then(data => data.json())
    .then(result => {
       //  let photographList;
        const photographList = result.photographers;
        const tags = document.querySelectorAll(".photographer__tags__tag");
        const artistList = []; // crée un nouveau tableau pour les photographes
        console.log(artistList);

      

// function filtrons() {
//     // console.log('filtrons!');
//     //1.shoot previous media data
//     // document.querySelector("main").innerHTML = "";
//     const tagArray = document.querySelector("main");

//     const getTags = (array, el) => {
//         array.forEach(item => {
//             console.log(item.tags);
             
//         })

//     }

//     getTags(photographList, tagArray)
  
// }

        for (let i = 0 ; i < photographList.length ; i++) {
          console.log(photographList);
          const photographer = new Photographe( photographList[i].name, photographList[i].id, photographList[i].city, photographList[i].country, photographList[i].tags, " ' " + photographList[i].tagline + " ' ",photographList[i].price + "€", photographList[i].portrait );
            photographer.render();
            artistList.push(photographer);
            
        }

        tags.forEach(tag => {
            tag.addEventListener('click', e => {
           const tagBtn = e.target.getAttribute("data-value"); //get tag button value//
        //    console.log(tagBtn);
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


// TRIER PAR //select options// sort



// const tableauDesTags = [
//     portrait,
//     art,
//     fashion,
//     architecture,
//     travel,
//     sport,
//     animals,
//     events,
//  ];
//  tableauDesTags.filter(tags);
//  console.log(tableauDesTags);

//onclick="filterSelection('portrait')

 //1.shoot previous media data
//  document.querySelector("main").innerHTML ="";
 //2.sort by tags

//  const tags = document.querySelectorAll('.general_tags');
//  if (tags){
//      tags.forEach(tag => {
//          tags.addEventListener('onclick', e => {
//              console.log("test");
//          })
//      })

//  }


//  tableauDesTags.filter(tags => tags.name.includes);
// // methodeclick + addEventListener(onclick, () => {
//     searchTerm = e.target.value;
//     affichageParTag();
// })

//if (!!filterTag) {
//     return ??
// }