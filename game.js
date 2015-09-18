var Game = { };
var player = new Player(new Vector2f(canvas.width/2,canvas.height/2), 25);
Game.init = function(){
	
};

Game.update = function(){
	player.update();
};


Game.draw = function(){
	c.strokeStyle = "#000000";
	c.strokeRect(0,0,canvas.width, canvas.height);
	c.translate(-player.pos.x + canvas.width/2, -player.pos.y + canvas.height/2);
	player.draw();
	c.translate(player.pos.x - canvas.width/2, player.pos.y - canvas.height/2);
	
};
