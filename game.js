var Game = {};
var player = new Player(new Vector2f(canvas.width / 2, canvas.height / 2), 25);
var balls = [];
var walls = [];
Game.init = function () {
    balls.push(new Ball(new Vector2f(100, 100), 25));
    walls.push(new Wall(new Vector2f(200, 200), new Vector2f(10, 100)));
};

Game.update = function () {
    for (var i = 0; i < balls.length; i++)
        balls[i].update();
    for (var i = 0; i < walls.length; i++)
        walls[i].update();
    player.update();
};


Game.draw = function () {
    c.fillStyle = "#eeeeee";
    c.fillRect(0,0,canvas.width, canvas.height);

    player.draw();
    for (var i = 0; i < balls.length; i++)
        balls[i].draw();
    for (var i = 0; i < walls.length; i++)
        walls[i].draw();

};
