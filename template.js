


//////

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
        const container = document.createElement("div");
        container.className = "main-photographes";
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
        // const span = document.createElement ("span");
        // span.className ="firsttag";
        // span.textContent = this.tags;
        
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
          const photographer = new Photographe( photographList[i].name, "450", "London", "UK", ["travel", "portrait"], "Voir le beau dans le quotidien","500£", "MimiKeel.jpg" );
            photographer.render();
        }
    });

// const PhotographerMimiKeel = new Photographe( "Mimi Keel", "450", "London", "UK", ["travel", "portrait"], "Voir le beau dans le quotidien","500£", "MimiKeel.jpg" );
// PhotographerMimiKeel.render();

// const PhotographerWilkens = new Photographe("Ellie-Rose Wilkens", "930", "Paris", "France", ["sports","architecture"], "Capturer des compositions complexes", "250€", "EllieRoseWilkens.jpg")
// PhotographerWilkens.render();

// const PhotographerGalindo = new Photographe("Tracy Galindo", "82", "Montreal", "Canada", ["art","fashion", "events"], "Photographe freelance", "500$", "TracyGalindo.jpg");
// PhotographerGalindo.render();

// const PhotographerBradford = new Photographe("Nabeel Bradford", "527", "Mexico City", "Mexico", ["sports"], "Toujours aller de l'avant", "350$", "NabeelBradford.jpg" );
// PhotographerBradford.render();

// const PhotographerDubois = new Photographe("Rhode Dubois", "925", "Barcelona", "Spain", ["sports", "fashion", "events"], "Je crée des souvenirs", "275€", "RhodeDubois.jpg" );
// PhotographerDubois.render();

// const PhotographerNikolic = new Photographe("Marcel Nikolic", "195", "Berlin", "Germany", ["travel", "architecture"], "Toujours à la recherche de LA photo", "300€", "MarcelNikolic.jpg" );
// PhotographerNikolic.render();






// CLASSE PHOTOGRAPHE DEUXIEME RENDER
//PAGE SECONDAIRE
// class photographe +

//class Photographie 















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