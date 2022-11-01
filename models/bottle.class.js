class Bottle extends ThrowableObject {

    y = 100;
    heigth = 50;
    width = 20;
    speedX = 30;
    speedY = 20;
    fly_sound = new Audio('');

    IMAGES_THROWING_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
    ];

    IMAGES_SPLASHING_BOTTLE = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];


    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');

        this.x = 50 + Math.random() * 1500;

        this.loadImages(this.IMAGES_THROWING_BOTTLE);
        this.loadImages(this.IMAGES_SPLASHING_BOTTLE);

        this.animate();
    }


    animate() {
        setInterval(() => {
            if(this.world.keyboard.D) {
                this.throw();
                this.fly_sound.play();
            }
        }, 1000 / 60);
    }





}