var Collision = {};

Collision.wall = function (ball) {
    for (var i = 0; i < walls.length; i++) {
        var w = walls[i];
        var hor = (w.pos.x + w.size.x > ball.pos.x + ball.vel.x - ball.size && w.pos.x < ball.pos.x + ball.vel.x + ball.size);
        var ver = (w.pos.y + w.size.y > ball.pos.y - ball.size && w.pos.y < ball.pos.y + ball.size);
        if (hor && ver)
            return "horizontal";
        hor = (w.pos.x + w.size.x > ball.pos.x - ball.size && w.pos.x < ball.pos.x + ball.size);
        ver = (w.pos.y + w.size.y > ball.pos.y + ball.vel.y - ball.size && w.pos.y < ball.pos.y + ball.vel.y + ball.size);
        if (hor && ver)
            return "vertical";
        hor = (w.pos.x + w.size.x > ball.pos.x + ball.vel.x - ball.size && w.pos.x < ball.pos.x + ball.vel.x + ball.size);
        ver = (w.pos.y + w.size.y > ball.pos.y + ball.vel.y - ball.size && w.pos.y < ball.pos.y + ball.vel.y + ball.size);
        if (hor && ver)
            return "both";
    }
    return "none";
};

Collision.ball = function (ball) {
    for (var i = 0; i < balls.length; i++) {
        if (ball != balls[i]) {
            var ball2 = balls[i];
            if (ball.vel.length() != 0 || ball2.vel.length() != 0)
                if (Math.sqrt(Math.pow((ball.pos.x + ball.vel.x - ball2.pos.x + ball2.vel.x), 2) +
                    Math.pow((ball.pos.y + ball.vel.y - ball2.pos.y + ball2.vel.y), 2))
                    <= ball.size + ball2.size) {
                    console.log(ball.pos.x + " " + ball.pos.y + " / " + ball2.pos.x + " " + ball2.pos.y);
                    var cVec = ball.pos.neg().add(ball2.pos);
                    var angle = ball.vel.angle(cVec);
                    cVec = cVec.norm();
                    var m = Math.cos(angle) * ball.vel.length();
                    balls[i].vel = new Vector2f(cVec.x * m, cVec.y * m);
                    ball.vel = ball.vel.add(balls[i].vel.neg());
                    return true;
                }
        }
    }
    return false;
};