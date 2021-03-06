var Game = {};
var player = new Player(new Vector2f(canvas.width / 2, canvas.height / 2), 25);
var balls = [];
var walls = [];
Game.init = function () {
    levelLoader.loadFromImage(Img.test);
    balls.push(player);
};

var release = true;
Game.update = function () {
    if (Input.keys[Input.codes.F] && release) {
        balls.push(new Ball(new Vector2f(Input.mouseX, Input.mouseY), 25));
        release = false;
    }
    if (!Input.keys[Input.codes.F])
        release = true;

    for (var i = 0; i < balls.length; i++) {
        Collision.ballBounce(balls[i]);
    }
    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
    }
};


Game.draw = function () {
    c.fillStyle = "#eeeeee";
    c.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < balls.length; i++)
        balls[i].draw();
    for (var i = 0; i < walls.length; i++)
        walls[i].draw();
};
