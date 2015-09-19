var Ball = function (pos, size) {
    this.pos = pos;
    this.size = size;
    this.color = "#F6546A";
    this.update = function () {

    };

    this.draw = function () {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
        c.fill();
    };
};