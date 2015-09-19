var Input = {};
Input.keys = new Array(7000);
Input.codes = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    LEFT: 37,
    UP: 39,
    RIGHT: 39,
    DOWN: 40

};
console.log(Input.keys.length);


document.addEventListener("keyup", function (event) {
    if (event.keyCode < Input.keys.length) {
        Input.keys[event.keyCode] = false;
    }
}, false);

document.addEventListener("keydown", function (event) {
    if (event.keyCode < Input.keys.length) {
        Input.keys[event.keyCode] = true;
    }
}, false);
