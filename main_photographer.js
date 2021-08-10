// RECUP ID dans l'URL // WINDOW.LOCATION

const queryParam_url_id = window.location.search;
console.log(queryParam_url_id); //??id

//extraire l'ID sans le ?

const useId = queryParam_url_id.slice(1);
console.log(useId);


// afficher un objet avec la key ID

// fetch + id ?
// find() + callback









// Afficher PROFIL PHOTOGRAPHERS
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
        const span = document.createElement ("span");
        span.className ="firsttag";
        span.textContent = this.tags;
        

        container.append(img, h2, loc, quote, pprice, ptags, span);
        document.querySelector("main").append(container);
        for (let i = 0 ; i < this.tags.length ; i++) {
            const span = document.createElement ("span");
            span.className ="firsttag";
            span.textContent = this.tags[i];
            container.append(span);
        }

    }
}

const PhotographerMimiKeel = new Photographe( "Mimi Keel", "450", "London", "UK", ["travel", "portrait"], "Voir le beau dans le quotidien","500£", "MimiKeel.jpg" );
PhotographerMimiKeel.render();


/// TEMPLATE MEDIAS


class Media {
    constructor(id, photographerId, title, image, tags, likes, date, price ) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    render() {
        const container = document.createElement("a");
        container.className = "medias";

        document.body.appendChild(container);  

        const img = document.createElement('img');
        img.src = "Sample Photos/" +this.image;
        // img.style.backgroundIMage = `url(${url})`
        img.className = "media__img";
        const containerI = document.createElement("div");
        containerI.className = "media__infos";
        const pname = document.createElement("p");
        pname.className = "media__infos__name"
        pname.textContent = this.title;
        const containerL = document.createElement("div");
        containerL.className ="media__likes"
        const plikes = document.createElement("p");
        plikes.className = "media__infos__likes";
        plikes.textContent =this.likes;
        const ilike = document.createElement("i");
        ilike.className ="fas fa-heart";



        container.append(img,containerI);
        containerI.append(pname, containerL);
        containerL.append(plikes, ilike);
    

    document.querySelector("main").append(container);



        
    }
}




    

// function imageOrVideo(image,video,){
//     if ('image' in media){
//         return
//     }
//     else if ('video' in media )
//     return 
// }





// TRIER PAR


tableauDesTags = [
    portrait,
    art,
    fashion,
    architecture,
    travel,
    sport,
    animals,
    events,
  ];


//afficher seuelement les photographes ayant le même tag
const affichageParTag = async () => {
  await triPhotographe();
  console.log(tableauDesTags);
};

//LIGHTBOX




//LIKES



// CONTACT BUTTON




