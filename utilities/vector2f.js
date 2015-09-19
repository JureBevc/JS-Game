var Vector2f = function (x, y) {
    this.x = x;
    this.y = y;

    this.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
    };
};
