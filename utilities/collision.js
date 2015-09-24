var Collision = {};

Collision.wall = function (ball) {
    var r = "none";
    for (var i = 0; i < walls.length; i++) {
        var w = walls[i];
        var hor = (w.pos.x + w.size.x > ball.pos.x + ball.vel.x - ball.size && w.pos.x < ball.pos.x + ball.vel.x + ball.size);
        var ver = (w.pos.y + w.size.y > ball.pos.y - ball.size && w.pos.y < ball.pos.y + ball.size);
        if (hor && ver)
            r = "horizontal";
        hor = (w.pos.x + w.size.x > ball.pos.x - ball.size && w.pos.x < ball.pos.x + ball.size);
        ver = (w.pos.y + w.size.y > ball.pos.y + ball.vel.y - ball.size && w.pos.y < ball.pos.y + ball.vel.y + ball.size);
        if (hor && ver)
            r = "vertical";
        /*
         hor = (w.pos.x + w.size.x > ballBounce.pos.x + ballBounce.vel.x - ballBounce.size && w.pos.x < ballBounce.pos.x + ballBounce.vel.x + ballBounce.size);
         ver = (w.pos.y + w.size.y > ballBounce.pos.y + ballBounce.vel.y - ballBounce.size && w.pos.y < ballBounce.pos.y + ballBounce.vel.y + ballBounce.size);
         if (hor && ver)
         r = "both";
         */
    }
    return r;
};

//TODO rewrite all of this below
Collision.ballBounce = function (ball) {

    for (var i = 0; i < balls.length; i++) {

        var ball2 = balls[i];

        if (ball != ball2 && !ball.checked && !ball2.checked) {
            if (ball.vel.length() != 0 || ball2.vel.length() != 0)
                if (Math.sqrt(Math.pow(((ball.pos.x + ball.vel.x) - (ball2.pos.x + ball2.vel.x)), 2) +
                    Math.pow(((ball.pos.y + ball.vel.y) - (ball2.pos.y + ball2.vel.y)), 2))
                    <= ball.size + ball2.size) {
                    var cVec = ball.pos.neg().add(ball2.pos);
                    console.log(cVec.length());
                    cVec = cVec.norm();
                    var angle = ball.vel.angle(cVec);
                    console.log(ball.vel.length() + " " + ball2.vel.length());
                    var m = Math.cos(angle) * ball.vel.length();
                    console.log(m);
                    ball2.vel = new Vector2f(cVec.x * m, cVec.y * m);
                    ball.vel = ball.vel.add(balls[i].vel.neg());
                    ball.checked = true;
                    ball2.checked = true;
                    return true;
                }
        }
    }
    return false;
};