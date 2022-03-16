class MovableObject {

    x = 50;
    y = 250;
    img;
    height = 200;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.1;
    otherDirection = false; //Bild standartmäßig nicht spiegeln
    speedY = 0;             //runterfallen
    acceleration = 1;       //Beschleunigung von runderfallen 

    //---------------------------------- FUNKTIONEN ----------------------------------


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.y < 250;
    }


    //loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); //this.img = document.getelementbyid('image') <img id="image" src>
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'white';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    //image cache
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    playAnimation(images) {
        //modulo, damit images_walking wieder von 0 beginnen // i = 0,1,2,3,4,5,0,1,2...
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };


    moveRight() {
        console.log('moving right');
    }


    //chicken & cloud bewegen
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


    jump() {
        this.speedY = 20;
    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.x < mo.x;
    }



}