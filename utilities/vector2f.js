var Vector2f = function (x, y) {
    this.x = x;
    this.y = y;

    this.add = function (vec) {
        return new Vector2f(this.x + vec.x, this.y + vec.y);
    };

    this.mul = function (m) {
        return new Vector2f(this.x * m, this.y * m);
    };

    this.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    this.norm = function () {
        return new Vector2f(this.x / this.length(), this.y / this.length());
    };

    this.neg = function () {
        return new Vector2f(-this.x, -this.y);
    };

    this.dot = function (vec) {
        return (this.x * vec.x + this.y * vec.y);
    };

    this.angle = function (vec) {
        return Math.acos(this.dot(vec) / (this.length() * vec.length()));
    };
};
