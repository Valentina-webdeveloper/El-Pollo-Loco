class Coin extends MovableObject {

    y = 250;
    height = 75;
    width = 75;
    IMAGES_WALKING = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];


    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 100 + Math.random() * 1500;

        this.animate();
    }


    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }






    
}