var Wall = function (pos, size) {
    this.pos = pos;
    this.size = size;

    this.color = "#161b1b";
    this.update = function () {

    };

    this.draw = function () {
        c.fillStyle = this.color;
        c.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    };
};