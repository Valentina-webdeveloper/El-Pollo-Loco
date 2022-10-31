class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false; //default no reflection of image
    speedY = 0;             //fall down
    acceleration = 2;       //exceleration of falling down 
    energy = 100;
    lastHit = 0;


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


    playAnimation(images) {
        //modulo, images_walking starts from 0 again // i = 0,1,2,3,4,5,0,1,2...
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }


    jump() {
        this.speedY = 30;
    }


    //character.isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.x < mo.x;
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;       //difference in ms from 01.01.1970
        timepassed = timepassed / 1000      //difference in seconds
        return timepassed < 0.8;
    }


    isDead() {
        return this.energy == 0;
    }



}