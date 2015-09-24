var Ball = function (pos, size) {
    this.pos = pos;
    this.size = size;
    this.vel = new Vector2f(0, 0);
    this.color = "#F6546A";
    this.checked = false;
    this.update = function () {

        var wColl = Collision.wall(this);
        if (wColl == "horizontal")
            this.vel = new Vector2f(-this.vel.x, this.vel.y);
        else if (wColl == "vertical")
            this.vel = new Vector2f(this.vel.x, -this.vel.y);
        else if (wColl == "both")
            this.vel = new Vector2f(-this.vel.x, -this.vel.y);
        else if ("none")

            this.pos = this.pos.add(this.vel);
        if (this.vel.length() > 0)
            this.vel = this.vel.mul(0.999);
        if (this.vel.length() < 0.1)
            this.vel = new Vector2f(0, 0);
        this.checked = false;
    };

    this.draw = function () {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
        c.fill();
    };
};