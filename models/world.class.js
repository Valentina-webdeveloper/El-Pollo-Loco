class World {

    character = new Character();        //ANDERE OBJEKTE IN LEVEL1 ALS "NEW" DEFINIERT
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
    }


    //KEYBOARD OBJEKT FERTIG STELLEN
    setWorld() {
        this.character.world = this;
    }


    draw() {
        //CANVAS WIRD ERST GELÖSCHT, DAMIT BILD NICHT MEHRFACH AN VERSCHIEDENEN KOORDINATEN ERSCHEINT
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //KAMERA WIRD VERSCHOBEN, Y ACHSE UM 0 VERSCHIEBEN
        this.ctx.translate(this.camera_x, 0);

        //CHARACTER, CHICKENS, CLOUDS, BACKGROUNDOBJECTS WERDEN ANGEZEIGT
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);

        //NICHT DER BILDAUSSCHNITT WIRD ZURÜCK GESCHOBEN, SONDERN DER CONTEXT, DER ZEICHNET
        this.ctx.translate(-this.camera_x, 0);

        //DAMIT IMAGES SOFORT ANGEZEIGT WERDEN //DRAW() WIRD IMMER WIEDER AUFGERUFEN
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    //BILD WIRD EINGEFÜGT
    addToMap(mo) {

        //BILD SPIEGELN
        if (mo.otherDirection) {

            //AKTUELLER STATUS VON CONTEXT WIRD GESPEICHERT
            this.ctx.save();
            //WIRD UM DIE BREITE VOM BILD IN DIE ANDERE RICHTUNG GESCHOBEN, ALSO UMGEDREHT
            this.ctx.translate(mo.width, 0);
            //BILD WIRD AN Y ACHSE GESPIEGELT WIEDERGEGEBEN
            this.ctx.scale(-1, 1);
            //X ACHSE BEGINNT VON 0 NACH LINKS (IN CANVAS NICHT MEHR ZUSEHEN, DAHER * -1)
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        //WENN CONTEXT VERÄNDERT WURDE, WIRD ÄNDERUNG RÜCKGÄNGIG GEMACHT
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}