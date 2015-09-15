var Game = { };

Game.init = function(){
	
};

Game.update = function(){
	if(Input.keys[Input.codes.D])
		x++;
};

var x = 0;
Game.draw = function(){
	c.strokeStyle = "#000000";
	c.strokeRect(0,0,canvas.width, canvas.height);
	c.fillStyle = "#FF0000";
	c.fillRect(x,0,50,50);
};
