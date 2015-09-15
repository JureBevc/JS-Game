var App = {};
var canvas = document.getElementById("canvas"),
	c = canvas.getContext("2d");

App.init = function(){
	Game.init();
};

App.run = function(){
	App.update();
	App.draw();
};

App.update = function(){
	Game.update();
};

App.draw = function(){
	c.clearRect(0,0,canvas.width, canvas.height);
	Game.draw();
};

App.init();
setInterval(App.run, 1000/60.0);
