function setup() {
	createCanvas(400, 500);
}

function draw() {
	//face
	fill(255)
	ellipse(250,200,170,200)

	//eyes
	fill(0)
	stroke( 0)
	ellipse(215,160,12,12)
	ellipse(285, 160, 12,12)

	//eyes lights
	fill(255)
	stroke(255)
	ellipse(217, 158, 2, 2)
	ellipse(283, 158, 2, 2)

	//mouse
	fill(255, 200, 0)
	stroke(255, 190, 0);
	strokeWeight(4);
	rect(225, 183, 50, 15, 20)
	rect(225, 168, 50, 15, 20)
	
	strokeWeight(2.0);

}