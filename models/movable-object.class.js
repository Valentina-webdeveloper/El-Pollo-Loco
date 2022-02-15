class MovableObject {

    x = 50;
    y = 250;
    img;
    height = 200;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.1;
    //BILD STANDARTMÄSSIG NICHT SPIEGELN
    otherDirection = false;
    speedY = 0;             //RUNTERFALLEN
    acceleration = 1;       //BESCHLEUNIGUNG RUNTERFALLEN 

    //---------------------------------- FUNKTIONEN ----------------------------------


    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.y < 250;
    }


    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // THIS.IMG = DOCUMENT.GETELEMENTBYID('IMAGE') <IMG ID="IMAGE" SRC>
        this.img.src = path;
    }


    //IMAGE CACHE
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    playAnimation(images) {
        //MODULO, DAMIT IMAGES_WALKING WIEDER VON 0 BEGINNEN // I = 0,1,2,3,4,5,  0,1,2,3,4,5,  0...
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };


    moveRight() {
        console.log('moving right');
    }


    //CHICKEN & CLOUD BEWEGEN
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}