class DrawableObject {

    img;
    imageCache = {};
    currentImage = 0;
    x = 50;
    y = 250;
    height = 200;
    width = 100;



    
    loadImage(path) {
        this.img = new Image(); //this.img = document.getelementbyid('image') <img id="image" src>
        this.img.src = path;
    }


    /**
     * 
     * @param {Array} arr - [img/image1.jpg', '...'] 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }    
    

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }






}