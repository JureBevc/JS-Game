var levelLoader = {};

levelLoader.loadFromImage = function (image) {
    image.onload = function () {
        c.drawImage(image, 0, 0);
        for (var y = 0; y < image.height; y++)
            for (var x = 0; x < image.width; x++) {

                var data = c.getImageData(x, y, 1, 1).data;
                if (data[0] == 0 && data[1] == 0 && data[2] == 0)
                    walls.push(new Wall(new Vector2f(x * 25, y * 25), new Vector2f(25, 25)));
                if (data[0] == 255 && data[1] == 0 && data[2] == 0)
                    balls.push(new Ball(new Vector2f(x * 25, y * 25), 25));
            }
    };
};