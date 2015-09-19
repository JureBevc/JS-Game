var Input = {};
Input.mouseDown = false;
Input.mouseX = 0;
Input.mouseY = 0;
canvas.addEventListener("mousedown", function (event) {
    Input.mouseDown = true;

    Input.mouseX = Math.floor(event.clientX - canvas.getBoundingClientRect().left);
    Input.mouseY = Math.floor(event.clientY - canvas.getBoundingClientRect().top);
});
canvas.addEventListener("mouseup", function (event) {
    Input.mouseDown = false;
});
canvas.addEventListener("mousemove", function (event) {
    Input.mouseX = Math.floor(event.clientX - canvas.getBoundingClientRect().left);
    Input.mouseY = Math.floor(event.clientY - canvas.getBoundingClientRect().top);
});

Input.keys = new Array(7000);
Input.codes = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    LEFT: 37,
    UP: 39,
    RIGHT: 39,
    DOWN: 40,
    F: 70
};


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
