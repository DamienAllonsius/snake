class Snake {
    constructor() {
	this.body = []
	this.body[0] = createVector(width / (2 * rez), height / (2 * rez))
	this.dir = createVector(0, 0)
	this.food = createVector(floor(random() * w), floor(random() * h))
	this.lgth = 1;
	this.score = 0;
    }

    setDir(pos) {
	if (this.dir.x !== -pos.x || this.dir.y !== -pos.y){
	    this.dir.x = pos.x
	    this.dir.y = pos.y
	}
	
    }

    showFood() {
	fill(255, 0, 0);
	noStroke();
	rect(this.food.x, this.food.y, size, size)
    }
    
    eat() {
	if (this.body[this.lgth-1].x == this.food.x && this.body[this.lgth-1].y == this.food.y){
	    this.score += 10;
	    return true;
	}
	return false;
    }

    makeHead(){
	let head = this.body[(this.lgth) - 1].copy();
	head.x += this.dir.x;
	head.y += this.dir.y;
	this.body.push(head);
    }

    end(){
	if (this.body[this.lgth -1].x < 0 || this.body[this.lgth -1].x > w || this.body[this.lgth -1].y < 0 || this.body[this.lgth -1].y > h){
	    return true; // the snake hit the surrounding wall
	}
	for (var i = 0; i < this.lgth - 1; i++) {
	    if (this.body[this.lgth - 1].x == this.body[i].x && this.body[this.lgth - 1].y == this.body[i].y){
		return true;
	    }   
	}
	return false;
    }
	
    grow() {
	this.makeHead();
	this.lgth++;
    }

    move(){
	this.score++;
	this.makeHead();
	this.body.shift(); // Erease the tail
    }
    
    makeFood(){
	this.food = createVector(floor(random() * w), floor(random() * h))
	// TODO : do *NOT* make a fruit *ON* the snake
    }
    
    show() {
	for (var i = 0; i < this.lgth; i++) {
	    fill(0);
	    noStroke();
	    rect(this.body[i].x, this.body[i].y, size, size)
	}
    }
}
