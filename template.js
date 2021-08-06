


////// TEMPLATE PHOTOGRAPHERS

class Photographe {
    constructor(nom, id, city, country, tags, quote, price, portrait) {
        this.name = nom;
        this.firstname = nom.split(" ")[0];
        this.lastname = nom.split(" ") [1];
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.quote = quote;
        this.price = price;
        this.portrait = portrait;
    }

    render(){
        const container = document.createElement("a");
        container.className = "main-photographes";
        container.title = "Page-photographe";  
        container.href = "/page.html";
        document.body.appendChild(container);  
     
        const img = document.createElement('img');
        img.src = "Sample Photos/Photographers ID Photos/" + this.portrait;
        img.className = "photographe-img";
        const h2 = document.createElement("h2");
        h2.className = "photographe-name";
        h2.textContent = this.name;
        const loc = document.createElement ("p");
        loc.className = "photographe-loc";
        loc.textContent = this.city +', '+ this.country;
        const quote = document.createElement("p");
        quote.className ="photographe-quote";
        quote.textContent = this.quote;
        const pprice = document.createElement ("p");
        pprice.className ="photographe-tarif";
        pprice.textContent = this.price;
        const ptags = document.createElement("div");
        ptags.className = "photographe-tags";
        
        container.append(img, h2, loc, quote, pprice, ptags);
        for (let i = 0 ; i < this.tags.length ; i++) {
            const span = document.createElement ("span");
            span.className ="firsttag";
            span.textContent = this.tags[i];
            container.append(span);
        }

        
        document.querySelector("main").append(container);

    }
}

fetch('/data_photographers.json')
    .then(data => data.json())
    .then(result => {
        const photographList = result.photographers;

        for (let i = 0 ; i < photographList.length ; i++) {
          console.log(photographList[i]);
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
        console.log("test");
	}
	else{
 
		btnContentUp.style.display = "none";
	}
}, false);