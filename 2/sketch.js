var fish1 = {
	x: 30,
	y: 500,
	a: 50,
	b:450,
	c:110,
	d:130
};

var fish2 = {
	x: 30,
	y: 500,
	a: 50,
	b: 550,
	c: 110,
	d: 130
};

var fish3 = {
	x: 30,
	y: 500,
	a: 0,
	b: 460,
	c: 540,
};

 var fish4 = {
	x: 110,
	y: 490,
	a: 10,
};


function setup() {
	createCanvas(640, 1136);
}
	
	function draw() {
	background(255, 233, 228)

	//fish
	fill(77,186,255);
	noStroke()
	bezier(fish1.x, fish1.y, fish1.a, fish1.b, fish1.c, fish1.b, fish1.d, fish1.y);
    bezier(fish2.x, fish2.y, fish2.a, fish2.b, fish2.c, fish2.b, fish2.d, fish2.y);
	triangle(fish3.x, fish3.y, fish3.a, fish3.b,fish3.a, fish3.c);
	fill(19,57,112)
	ellipse(fish4.x,fish4.y,fish4.a,fish4.a)
	
	fish1.x=fish1.x+3;
	fish1.a=fish1.a+3;
		fish1.c = fish1.c + 3;
		fish1.d = fish1.d + 3;
		
    fish2.x = fish2.x + 3;
		fish2.a = fish2.a + 3;
		fish2.c = fish2.c + 3;
		fish2.d = fish2.d + 3;

    fish3.x = fish3.x + 3;
		fish3.a = fish3.a + 3;
   
	fish4.x = fish4.x + 3;
}