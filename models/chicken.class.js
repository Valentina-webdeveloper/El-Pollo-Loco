//CHICKEN HAT ALLE EIGENSCHAFTEN VON MOVABLEOBJECT
class Chicken extends MovableObject {

    y = 395;
    height = 50;
    width = 40;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    //---------------------------------- FUNKTIONEN ----------------------------------

    
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;

        //UNTERSCHIEDLICHE GESCHWINDIGKEIT DER CHICKEN, MATH.random() IST EINE ZAHL ZWISCHEN 0 UND 1
        this.speed = 0.25 + Math.random() * 0.4;

        this.animate();
    }


    animate() {

        this.moveLeft();

        setInterval(() => {
            //MODULO, DAMIT IMAGES_WALKING WIEDER VON 0 BEGINNEN // I = 0,1,2,3,4,5,  0,1,2,3,4,5,  0...
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}