class Level {

    enemies;
    clouds;
    backgroundObjects;
    coins;
    level_end_x = 1200;

    //---------------------------------- FUNKTIONEN ----------------------------------


    constructor(enemies, clouds, backgroundObjects, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins
    }
}