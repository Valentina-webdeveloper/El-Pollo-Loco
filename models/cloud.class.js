class Cloud extends MovableObject {

    y = 80;
    height = 250;
    width = 600;

    
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 0 + Math.random() * 300;

        this.animate();
    }


    animate() {
        this.moveLeft();
    }






    
}