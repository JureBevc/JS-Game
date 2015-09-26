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

        if (ball != ball2) {
            if (ball.vel.length() != 0 || ball2.vel.length() != 0)
                if (Math.sqrt(Math.pow(((ball.pos.x + ball.vel.x) - (ball2.pos.x + ball2.vel.x)), 2) +
                    Math.pow(((ball.pos.y + ball.vel.y) - (ball2.pos.y + ball2.vel.y)), 2))
                    <= ball.size + ball2.size) {
                    if (ball.vel.length() != 0 && ball2.vel.length() != 0) {
                        var moveAngle1 = ball.vel.angle(new Vector2f(1, 0));
                        var moveAngle2 = ball2.vel.angle(new Vector2f(1, 0));
                        var colAngle = ball.pos.neg().add(ball2.pos).angle(new Vector2f(1, 0));
                        var x1 = ball2.vel.length() * Math.cos(moveAngle2 - colAngle) * Math.cos(colAngle) + ball.vel.length() * Math.sin(moveAngle1 - colAngle) * Math.cos(colAngle + Math.PI / 2);
                        var y1 = ball2.vel.length() * Math.cos(moveAngle2 - colAngle) * Math.sin(colAngle) + ball.vel.length() * Math.sin(moveAngle1 - colAngle) * Math.sin(colAngle + Math.PI / 2);
                        var x2 = ball.vel.length() * Math.cos(moveAngle1 - colAngle) * Math.cos(colAngle) + ball2.vel.length() * Math.sin(moveAngle2 - colAngle) * Math.cos(colAngle + Math.PI / 2);
                        var y2 = ball.vel.length() * Math.cos(moveAngle1 - colAngle) * Math.sin(colAngle) + ball2.vel.length() * Math.sin(moveAngle2 - colAngle) * Math.sin(colAngle + Math.PI / 2);

                        ball.vel = new Vector2f(x1, y1);
                        ball2.vel = new Vector2f(x2, y2);
                    }else if(ball.vel.length() == 0){

                    }else{

                    }
                    return true;
                }
        }
    }
    return false;
};