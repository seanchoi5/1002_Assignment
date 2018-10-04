//Draw a series of rectangles rotated at different angles using push() / pop().
//Draw a series of rectangles rotated at different angles using push() / pop() with a for loop.
//Draw a series of rectangles rotated at different angles using push() / pop() with mouse interactivity controlling the angle of rotation.

function setup() {
	createCanvas(600,600);
	background(230);
}

function draw() {
	push();
		translate(300,400);
		rotate(PI/8);
		scale(2.5, 2.5);
		fill(0,0,255);
		rect(0,0,60,60);
	pop();
	push();
		translate(100,200); //first change the local origin
		rotate(PI/4); //rotate relative to the new local origin
		fill(0,255,0);
		rect(0,0,60,60);
	pop();
}