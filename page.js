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

    }
}

const PhotographerMimiKeel = new Photographe( "Mimi Keel", "450", "London", "UK", ["travel", "portrait"], "Voir le beau dans le quotidien","500£", "MimiKeel.jpg" );
PhotographerMimiKeel.render();



// //class Portfolio {
//     constructor(photo, id, name, like, likenumber){
//         this.photo = photo;
//         this.id = id;
//         this.name = name;
//         this.like = like;
//         this.likenumber = likenumber;
    
//     }

//     // render(){
//     //     const container = document.createElement("div");
//     //     container.className = "photographe-work";
//     //     const img = document.createElement("img");
//     //     img.src = "Sample Photos/" + this.photo;
//     //     img.className = work-img;
//     //     const container = document.createElement("div");
//     //     container.className = "work-info";
//         const pname = document.createElement ("h2");
//         pname.className = "work-name"
//         pname.textContent = this.name;
//         const iheart = document.createElement ("i");
//         iheart.className = "fas fa-heart";
//         const plike = document.createElement("p");
//         plike.className ="work-like";
//         plike.textContent = this.likenumber;

//         container.append (img, h2, i, likenumber);
//         document.querySelector("main-photographer").append(container);

//     }
// }

// const OiseauBleu = new Portfolio ("/Mimi/Animals_Rainbow.jpg", "Animals Rainbow", "12");
// OiseauBleu.render();//


