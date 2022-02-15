let canvas;   //Spielfeld
let world;   //alles im Spielfeld
let keyboard = new Keyboard();


//HTML ONLOAD="INIT()"
function init() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


//KEYBOARDOBJEKT FERTIGSTELLEN, TASTEN WERDEN GEDRÜCKT
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});


//KEYBOARDOBJEKT FERTIGSTELLEN, TASTEN WERDEN LOSGELASSEN
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
});