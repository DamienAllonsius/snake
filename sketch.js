let snake;
let rez = 10;
let height = 200;
let width = 300;
let w = width / rez;
let h = height / rez;
let size = 10 / rez;
let textsize = 50 / rez;
let frameSpeed = 10;

function setup() {
    createCanvas(width, height);
    frameRate(frameSpeed);
    snake = new Snake();
    textSize(textsize);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);
}

function keyPressed() {
    switch(keyCode){
    case UP_ARROW:
	snake.setDir(createVector(0,-1));
	break;
	
    case DOWN_ARROW:
	snake.setDir(createVector(0,1));
	break;
	
    case LEFT_ARROW:
	snake.setDir(createVector(-1,0));
	break;
	
    case RIGHT_ARROW:
	snake.setDir(createVector(1,0));
	break;
    }
}

function draw() {
    background(220);
    scale(rez);
    if (snake.eat()){
	snake.grow();
	frameSpeed ++;
	frameRate(frameSpeed);
	snake.makeFood();
    }
    snake.move();
    snake.show();
    snake.showFood();
    if (snake.end()){
	background(255, 0, 0);
	fill(0,255,0);
	text('You lose !\n' + 'score = ' + snake.score, w / 2, w /2);
	noLoop();
    }
}
