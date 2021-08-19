import { Photographe} from "./class/Photographe.js"

////// TEMPLATE PHOTOGRAPHERS


fetch('/data_photographers.json')
    .then(data => data.json())
    .then(result => {
        const photographList = result.photographers;

        for (let i = 0 ; i < photographList.length ; i++) {
          console.log(photographList);
          const photographer = new Photographe( photographList[i].name, photographList[i].id, photographList[i].city, photographList[i].country, photographList[i].tags, " ' " + photographList[i].tagline + " ' ",photographList[i].price + "€", photographList[i].portrait );
            photographer.render();
            
        }


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