import {getTotalLike, updateTotalLike} from "../main_photographer.js";

class Media {
    constructor (id, photographerId, title, src, tags, likes, date,price){
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.src = src;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }




    incrLikes(){
       

        this.likes = this.likes + 1;
    

    }

    // decrLikes(){
    //     this.likes = this.likes -1;
    // }



}

class Image extends Media {
    constructor(id, photographerId, title, src, tags, likes, date,price){
        super(id, photographerId, title, src, tags, likes, date,price)
    }

    render(){
        const container = document.createElement("div");
    
        container.className = "media";
        document.body.appendChild(container);

        const img = document.createElement("img");
        img.src = this.src; 
        img.addEventListener("click", () => {
            this.handleClick();
        })

        img.className = "media_img";
        img.setAttribute("aria-label", "Cliquer pour agrandir");
        img.setAttribute("tabindex", "0");
        img.addEventListener("keydown", (e)=>{
            if (e.key === 'Enter'){
                this.handleClick(e);
        }})
        const infos = document.createElement("div");
        infos.className = "media_infos";
        const h2 = document.createElement ('h2');
        h2.className = "media_title";
        h2.textContent = this.title;
        const likes = document.createElement("div");
        likes.className = "media_likes";
        const numberoflikes = document.createElement ("p");
        numberoflikes.className = "media_numberoflikes"
        numberoflikes.textContent = this.likes;
        const heart = document.createElement ("i");
        heart.className = "fas fa-heart";
        heart.setAttribute("aria-label", "cliquer pour aimer le média")
        heart.setAttribute("tabindex", "0");
       
        heart.addEventListener("click", () => {
        

            this.incrLikes();  
            numberoflikes.textContent = this.likes;
            updateTotalLike(getTotalLike());
            
        })
        heart.addEventListener("keydown", () => {
            this.incrLikes();  
            numberoflikes.textContent = this.likes;
            updateTotalLike(getTotalLike());
        })
        
        infos.append( h2,likes );
        likes.append(numberoflikes, heart);

    
        
        container.append(img,infos);
        document.querySelector("#medias").append(container);


    }

    renderLightbox(){
        const container = document.getElementsByClassName("lightbox___container")[0];
        const media = document.createElement('img');
        media.src = this.src;
        media.className = "media_lightbox";
        const h2 = document.createElement('h2');
        h2.className = "media_lightbox_title";
        h2.textContent = this.title;

        container.append(media, h2)
        

    }

    
    }



    class Video extends Media {
        constructor(id, photographerId, title, src, tags, likes, date,price){
            super(id, photographerId, title, src, tags, likes, date,price)
        }
        render(){
            const container = document.createElement("div");
            
            container.className = "media";
            document.body.appendChild(container);

            const video = document.createElement("video");
            video.src = this.src;
            video.addEventListener("click", () => {
                this.handleClick();
            })
            video.className ="media_video";
            video.setAttribute("aria-label", "Cliquer pour agrandir");
            video.setAttribute("tabindex", "0");


            const infos = document.createElement("div");
            infos.className = "media_infos";
            const h2 = document.createElement ('h2');
            h2.className = "media_title";
            h2.textContent = this.title;
            const likes = document.createElement("div");
            likes.className = "media_likes";
            const numberoflikes = document.createElement ("p");
            numberoflikes.className = "media_numberoflikes"
            numberoflikes.textContent = this.likes;
           const heart = document.createElement ("i");
           heart.className = "fas fa-heart";
           heart.setAttribute("aria-label", "cliquer pour aimer le média")
           heart.setAttribute("tabindex", "0");
           heart.addEventListener("click", () => {
               this.incrLikes();
               numberoflikes.textContent = this.likes;
               updateTotalLike(getTotalLike());
           })
           heart.addEventListener("keydown", () => {
            this.incrLikes();  
            numberoflikes.textContent = this.likes;
            updateTotalLike(getTotalLike());
        })
           infos.append( h2,likes);
           likes.append(numberoflikes, heart);

    
        
        container.append(video,infos);
        document.querySelector("#medias").append(container);




        }
        renderLightbox(){
            const container = document.getElementsByClassName("lightbox___container")[0];
            const media = document.createElement('video');
            media.src = this.src;
            media.className = "media_lightbox";
            const h2 = document.createElement('h2');
            h2.className = "media_lightbox_title";
            h2.textContent = this.title;
    
            container.append(media, h2)
            
    
        }
    
        }


class Lightbox {
 

    constructor(mediaList) {
        this.mediaList = mediaList;
        this.activeMedia = null;
        this.mediaList.forEach((el) =>  {
            el.handleClick = () => {
                this.render(el); 
            
            }
        });

        this.closeIcon = null;
        this.leftIcon = null;
        this.rightIcon = null;
        this.onKeyup = this.onKeyup.bind(this)
        document.addEventListener('keyup', this.onKeyup.bind(this))
    }


    

    render(inputMedia){
        this.activeMedia = inputMedia;
        const mediaData = this.activeMedia;
        console.log(mediaData);
        const container = document.createElement("div");
        container.className ="lightbox___container";
        document.body.appendChild(container);
        this.closeIcon = document.createElement("i");
        this.closeIcon.className = "lightbox__close fas fa-times closeIcon";
        this.closeIcon.setAttribute("aria-label", "Fermer");
        this.closeIcon.setAttribute("tabindex", "0")
        this.closeIcon.addEventListener("click", () => {
            this.close();
        })
        this.leftIcon = document.createElement("i");
        this.leftIcon.className = "lightbox__prev fas fa-chevron-left leftIcon";
        this.leftIcon.setAttribute("aria-label", "Aller au média précédent")
        this.leftIcon.addEventListener("click", () => {
            this.prev();
        })
        this.rightIcon = document.createElement("i");
        this.rightIcon.className = "lightbox__next fas fa-chevron-right rightIcon";
        this.rightIcon.setAttribute("aria-label", "Aller au média suivant")

        this.rightIcon.addEventListener("click", () => {
            this.next();
        })

       
       container.append(this.closeIcon, this.leftIcon, this.rightIcon)
       this.closeIcon.focus();
        
       this.activeMedia.renderLightbox();
       

       
    }
    

    

    next() {
   

    const idx = this.mediaList.findIndex((e)=> {
        return e === this.activeMedia});
        

        document.querySelector(".media_lightbox").remove();
        document.querySelector(".media_lightbox_title").remove();


        if (idx >= this.mediaList.length -1) {
            this.activeMedia = this.mediaList[0];
            this.activeMedia.renderLightbox();
        }
        else {
        this.activeMedia = this.mediaList[idx+1]
        this.activeMedia.renderLightbox();}

     
    
        
    
    }



    

    prev() {
        const idx = this.mediaList.findIndex((e)=> {
            return e === this.activeMedia});
            
    
            document.querySelector(".media_lightbox").remove();
            document.querySelector(".media_lightbox_title").remove();
    
    
            if (idx === 0 ) {
                const newIndex = this.mediaList.length -1;
                this.activeMedia = this.mediaList[newIndex];
                this.activeMedia.renderLightbox();
            }
            else {
            this.activeMedia = this.mediaList[idx-1]
            this.activeMedia.renderLightbox();}
    

    }

    open(){
        document.getElementsByClassName("lightbox___container").style.display = 'block';


    }

    close() {
        const lightbox = document.querySelector(".lightbox___container");
        if (lightbox) {
            lightbox.remove();
        }
        
      



    }

    

        
onKeyup(e) {
    if (e.key === 'Escape'){
        this.close(e);
    }
// 
    else if(e.key === 'ArrowLeft'){
        this.prev(e)
    }
    else if (e.key === 'ArrowRight'){
        this.next(e)
    }

    else if (e.key === 8){
        this.open(e);
    }

    

}


    
}


export {Media, Image, Video, Lightbox};
