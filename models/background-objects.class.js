class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    //---------------------------------- FUNKTIONEN ----------------------------------


    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;   //=80, Y KOORDINATE MUSS SO NICHT MEHR IN WORLD EINGEGEBEN WERDEN
    }
}