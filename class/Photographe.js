class Photographe {
    constructor(nom, id, city, country, tags, quote, price, portrait) {
        this.name = nom;
        // this.firstname = nom.split(" ")[0];
        // this.lastname = nom.split(" ") [1];
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
        container.title = "Page-photographe";  
        // container.href = "/page.html?id="+this.id; //+ this.id// OR SEARCH PARAMS OR ?id=${photographer.id}
        document.body.appendChild(container); 

        document.querySelector("main").append(container);
 
        
     
        const linkcontainer = document.createElement('a');
        linkcontainer.className = "photographer-data"
        linkcontainer.href ="/page.html?id="+this.id;
        linkcontainer.setAttribute('alt', this.name);
        // linkcontainer.setAttribute("tab-index=0")
        // linkcontainer.aria-labellby="test-acces";
        const img = document.createElement('img');
        img.src = "Sample Photos/Photographers ID Photos/" + this.portrait;
        img.className = "photographe-img";
    
        img.href ="./page.html?id="+this.id;
        const infocontainer = document.createElement("div");
        infocontainer.className ="photographer-infos"
        const h2 = document.createElement("h2");
        h2.className = "photographe-name";
        h2.textContent = this.name;
        h2.setAttribute("aria-label", "Cliquer pour accéder à la page photographe");
        const loc = document.createElement ("p");
        loc.className = "photographe-loc";
        loc.textContent = this.city +', '+ this.country;
        const quote = document.createElement("p");
        quote.className ="photographe-quote";
        quote.textContent = this.quote;
        const pprice = document.createElement ("p");
        pprice.className ="photographe-tarif";
        pprice.textContent = this.price;
        
        linkcontainer.append(img,infocontainer);
        infocontainer.append(h2,loc,quote,pprice);
        container.append(linkcontainer);
        const ptags = document.createElement("div");
        ptags.className = "photographe-tags";
        


        for (let i = 0 ; i < this.tags.length ; i++) {
           
            const span = document.createElement ("a");
            span.href ="./index.html?tag="+this.tags[i];
            span.className ="firsttag";
            span.textContent = this.tags[i];
            span.setAttribute("aria-label", "Cliquer pour afficher la catégorie " +this.tags[i])
            ptags.append(span)
            container.append(ptags);

        }


     
        

        

    }

    
}



// class Artist extends Photographe {
//     constructor(nom, id, city, country, tags, quote, price, portrait) {
//         super(nom, id, city, country, tags, quote, price, portrait) 
            
//     }

   
// }
// const artiste1 = new Artist ("Michel", 140, "Paris", "France", [null], 150);
// console.log(artiste1);

export {Photographe};