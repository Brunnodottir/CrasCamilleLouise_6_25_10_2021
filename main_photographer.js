// HEADER


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
        container.title = "Lightbox";
        container.href ="#";
        document.body.appendChild(container);  

        const img = document.createElement('img');
        img.src = "Sample Photos" +this.image;
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

fetch('/data_photographers.json')
    .then(data => data.json())
    .then(result => {
        const mediaList = result.media;

        for (let i = 0 ; i < mediaList.length ; i++) {
          console.log(mediaList[i]);
          const media = new Media( mediaList[i].id, mediaList[i].photographerId, mediaList[i].title, mediaList[i].image, mediaList[i].tags, mediaList[i].likes, mediaList[i].date, mediaList[i].price);
            media.render();
        }
    });


// TRIER PAR

// LISTE PHOTO

// CONTACT BUTTON

//modal