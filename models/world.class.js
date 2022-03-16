class World {

    character = new Character(); //andere Objekte "new" in Level1
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    //---------------------------------- FUNKTIONEN ----------------------------------


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }


    //Keyboard Objekt fertigstellen
    setWorld() {
        this.character.world = this;
    }


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    console.log('is colliding with character', enemy);
                }
            });
        }, 200);
    }


    draw() {
        //Canvas erst gelöscht, damit Bild einmalig angezeigt wird
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //Camera x Achse um 0 verschieben
        this.ctx.translate(this.camera_x, 0);

        //anzeigen
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);

        //zeichnenden Context verschieben
        this.ctx.translate(-this.camera_x, 0);

        //Images sofort anzeigen //draw() immer wirder aufrufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    //Bild einfügen und spiegeln
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        //Funktionen in movable object
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);  //Bild an Y Achse gespiegelt wiedergegeben// x Achse nach links
        mo.x = mo.x * -1;

    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }





}