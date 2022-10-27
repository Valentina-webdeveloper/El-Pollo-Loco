class Statusbar extends DrawableObject {

    IMAGES_STATUSBAR = [
        'El-Pollo-Loco/img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'El-Pollo-Loco/img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'El-Pollo-Loco/img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'El-Pollo-Loco/img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'El-Pollo-Loco/img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'El-Pollo-Loco/img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ]

    percentage = 100;


    constructor() {
        this.loadImages(this.IMAGES_STATUSBAR);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
    }

