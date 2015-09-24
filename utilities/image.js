var Img = {};

Img.loadImage = function (src) {
    var img = new Image()
    img.src = "images/" + src;
    return img;
};

Img.test = Img.loadImage("test.png");