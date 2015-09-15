var Player = function(pos, size){
	this.pos = pos;
	this.size = size;

	var speed = 3;
	this.update = function(){
		if(Input.keys[Input.codes.W])
			this.pos.add(new Vector2f(0, -speed));
		if(Input.keys[Input.codes.A])
                        this.pos.add(new Vector2f(0, speed));
		if(Input.keys[Input.codes.S])
                        this.pos.add(new Vector2f(-speed, 0));
		if(Input.keys[Input.codes.D])
                        this.pos.add(new Vector2f(speed, 0));

	};

	this.draw = function(){
		c.fillStyle = "#FF0000";
		c.fillRect(this.pos.x, this.pos.y, this.size, this.size);
	};

};
