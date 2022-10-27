class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false; //default no reflection of image
    speedY = 0;             //fall down
    acceleration = 1;       //exceleration of falling down 
    lastHit = 0;

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


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'white';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    playAnimation(images) {
        //modulo, images_walking starts from 0 again // i = 0,1,2,3,4,5,0,1,2...
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };


    moveRight() {
        console.log('moving right');
    }


    //move chicken & cloud
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


    jump() {
        this.speedY = 20;
    }


    //character.isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.x < mo.x;
    }


    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
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