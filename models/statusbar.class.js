class Statusbar extends DrawableObject {

    IMAGES_STATUSBAR = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ]

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR);
        this.x = 10;
        this.y = 5;
        this.width = 170;
        this.height = 60;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;       //image between 0 and 5
        let path = this.IMAGES_STATUSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else if (this.percentage > 0) {
            return 0;
        } 
    }









}