var Player = function (pos, size) {
    this.pos = pos;
    this.size = size;
    this.color = "#81CEC7";
    this.vel = new Vector2f(0, 0);
    var mul = 0.1;

    var selected = false;
    var start = false;

    this.update = function () {
        if (Input.mouseDown) {
            if (Input.mouseX > this.pos.x - this.size && Input.mouseX < this.pos.x + this.size
                && Input.mouseY > this.pos.y - this.size && Input.mouseY < this.pos.y + this.size)
                selected = true;
            if (selected)
                this.vel = new Vector2f(Input.mouseX - this.pos.x, Input.mouseY - this.pos.y);
            this.vel = this.vel.mul(mul);
        } else if (selected) {
            start = true;
            selected = false;
        }


        if (start) {
            Collision.ball(this);
            var wColl = Collision.wall(this);
            if (wColl == "horizontal")
                this.vel = new Vector2f(-this.vel.x, this.vel.y);
            else if (wColl == "vertical")
                this.vel = new Vector2f(this.vel.x, -this.vel.y);
            else if (wColl == "both")
                this.vel = new Vector2f(-this.vel.x, -this.vel.y);
            else if ("none")
                this.pos = this.pos.add(this.vel);
        }


    };

    this.draw = function () {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
        c.fill();
        if (selected) {
            c.strokeStyle = "#FF0000";
            c.beginPath();
            c.moveTo(this.pos.x, this.pos.y);
            c.lineTo(this.pos.x + this.vel.x / mul, this.pos.y + this.vel.y / mul);
            c.stroke();
        }
    };

};
