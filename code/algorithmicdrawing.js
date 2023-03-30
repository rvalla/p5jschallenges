/*
¡Hola! Están mirando el código de un programa para dibujar con el teclado.
Por ahora sabe dibujar líneas rectas nomás (con la tecla D). Su misión es enseñarle
a dibujar cosas más divertidas.
Tengan en cuenta que:
- La "D" agrega una línea.
- Las flechitas se usan para girar y para cambiar las repeticiones de una línea.
- El "+" y el "-" se usan para cambiar el tamaño.
Primero prueben cómo funciona. Después ustedes tienen que usar las funciones
drawing(l) y turn(a) para crear nuevas funciones. ¡Busquen comentarios más abajo!
*/

let lw, step, textline;
let c, bg;
let thecanvas, showinfo;
let origin, lastpoint;
let dna, sizes, iterations, currentiterations, currentsize, direction, currentdirection, directions, wheel;

function setup() {
	createCanvas(windowWidth, windowHeight);
	thecanvas = document.getElementsByTagName("canvas")[0];
	thecanvas.addEventListener("mousedown", processEv, false);
	config = getURLParams();
	startConfig(config);
	noLoop();
	print("Algorithmic drawing v0.6");
	getScreen();
}

function getScreen(){
	print(c);
	print(bg);
	background(bg);
	if (showinfo){
		printInfo();
	}
	lastpoint = origin;
	buildDrawing();
	print("ADN: " + dna);
	print("Direcciones: " + directions);
	print("Tamaños: " + sizes);
	print("Repeticiones: " + iterations);
}

//¡Acá hay una función! Tienen que usar drawing(l) y turn(a) para definir qué hace.
//Esta función se ejecuta con la tecla "S".
function aStep(l){
	
}

//¡Acá hay una función! Tienen que usar drawing(l) y turn(a) para definir qué hace.
//Esta función se ejecuta con la tecla "P".
function aPike(l){
	
}

//¡Acá hay una función! Tienen que usar drawing(l) y turn(a) para definir qué hace.
//Esta función se ejecuta con la tecla "T".
function aTooth(l){
	
}

//¡Acá hay una función! Tienen que usar drawing(l) y turn(a) para definir qué hace.
//Esta función se ejecuta con la tecla "R".
function aRoller(l){
	
}

//¡Acá hay una función! Tienen que usar drawing(l) y turn(a) para definir qué hace.
//Esta función se ejecuta con la tecla "4".
function aSquare(l){
	
}

//¡Acá hay una función! Tienen que usar drawing(l) y turn(a) para definir qué hace.
//Esta función se ejecuta con la tecla "8".
function anOctagon(l){
	
}

function drawing(l){
	stroke(c);
	p2 = getPoint(lastpoint, currentdirection, l);
	line(lastpoint[0],lastpoint[1],p2[0],p2[1]);
	lastpoint = p2;
}

function turn(t){
	currentdirection = (currentdirection + t)%8;
}

function getPoint(p, d, l){
	p2 = [];
	p2[0] = p[0] + wheel[d][0] * step * l;
	p2[1] = p[1] + wheel[d][1] * step * l;
	return p2;
}

function printInfo(){
	noStroke();
	fill(c);
	text("Repeticiones: " + str(currentiterations), 25, 25);
	text("Dirección: " + str(direction), 25, 25 + textline);
	text("Tamaño: " + str(currentsize), 25, 25 + textline * 2);
}

function buildDrawing(){
	for (let i = 0; i < dna.length; i++){
		let b = dna[i];
		let l = Number(sizes[i]);
		currentdirection = Number(directions[i]);
		let r = Number(iterations[i]);
		for (let j = 0; j < r; j++){
			switch (b) {
				case "D":
					drawing(l);
					break;
				case "S":
					aStep(l);
					break;
				case "P":
					aPike(l);
					break;
				case "T":
					aTooth(l);
					break;
				case "R":
					aRoller(l);
					break;
				case "4":
					aSquare(l);
					break;
				case "8":
					anOctagon(l);
					break;
			}
		}
	}
}

function keyPressed() {
	if (key === "D" || key === "d") {
		dna += "D";
		sizes += str(currentsize);
		directions += str(direction);
		iterations += str(currentiterations);
	} else if (key === "S" || key === "s") {
		dna += "S";
		sizes += str(currentsize);
		directions += str(direction);
		iterations += str(currentiterations);
	} else if (key === "P" || key === "p") {
		dna += "P";
		sizes += str(currentsize);
		directions += str(direction);
		iterations += str(currentiterations);
	} else if (key === "T" || key === "t") {
		dna += "T";
		sizes += str(currentsize);
		directions += str(direction);
		iterations += str(currentiterations);
	} else if (key === "R" || key === "r") {
		dna += "R";
		sizes += str(currentsize);
		directions += str(direction);
		iterations += str(currentiterations);
	} else if (key === "4") {
		dna += "4";
		sizes += str(currentsize);
		directions += str(direction);
		iterations += str(currentiterations);
	} else if (key === "8") {
		dna += "8";
		sizes += str(currentsize);
		directions += str(direction);
		iterations += str(currentiterations);
	} else if (key === "+") {
		currentsize = (currentsize + 1)%10;
	} else if (key === "-") {
		let m = (currentsize - 1)%10;
		if (m < 0){
			m += 10;
		}
		currentsize = m;
	} else if (keyCode === UP_ARROW) {
		currentiterations = (currentiterations + 1)%10;
	} else if (keyCode === DOWN_ARROW) {
		let m = (currentiterations - 1)%8;
		if (m < 0){
			m += 8;
		}
		currentiterations = m;
	} else if (keyCode === RIGHT_ARROW) {
		direction = (direction + 1)%8;
	} else if (keyCode === LEFT_ARROW) {
		let m = (direction - 1)%8;
		if (m < 0){
			m += 8;
		}
		direction = m;
	} else if (keyCode === BACKSPACE){
		l = dna.length - 1;
		dna = dna.substring(0, l);
		sizes = sizes.substring(0, l);
		directions = directions.substring(0, l);
		iterations = iterations.substring(0, l);
	}  else if (keyCode === DELETE){
		dna = "-";
		sizes = "-";
		directions = "-";
		iterations = "-";
	} else if (keyCode === ENTER){
		saveCanvas("algorithmicdrawing.jpg")
	}
	getScreen();
}

function processEv(){
	origin = [mouseX, mouseY];
	getScreen();
}

function startConfig(config) {
	origin = [width * 0.33, height * 0.66];
	lastpoint = origin;
	currentdirection = 0;
	sizes = "-";
	direction = 0;
	currentiterations = 1;
	wheel = [[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];
	dna = "-";
	directions = "-";
	iterations = "-";
	let number = Number(config.step);
  	if (typeof(number) === "number" && Number.isInteger(number)) {
    	step = number;
	} else {
		step = 25;
	}
	number = Number(config.lw);
	if (typeof(number) === "number" && Number.isInteger(number)) {
    	lw = number;
	} else {
		lw = 3;
	}
	let string = config.size;
	if (typeof(string) === "string" && Number.isInteger(Number(string))) {
		currentsize = Number(number);
	} else {
		currentsize = 1;
	}
	string = config.info;
	if (typeof(string) === "string" && string === "false") {
    	showinfo = false;
	} else {
		showinfo = true;
	}
	string = config.background;
	bg = color(34);
	if (typeof(string) === "string"){
		values = string.split(",");
		print(values);
		if (values.length === 3){
			rgb = [Number(values[0]), Number(values[1]), Number(values[2])]
			print(rgb);
			if (!(isNaN(rgb[0]) || isNaN(rgb[1] || isNaN(rgb[2])))){
				bg = color(rgb[0], rgb[1], rgb[2]);
			}
		}
	}
	string = config.color;
	c = color(153,170,169);
	if (typeof(string) === "string"){
		values = string.split(",");
		print(values);
		if (values.length === 3){
			rgb = [Number(values[0]), Number(values[1]), Number(values[2])]
			if (!(isNaN(rgb[0]) || isNaN(rgb[1] || isNaN(rgb[2])))){
				c = color(rgb[0], rgb[1], rgb[2]);
			}
		}
	}
	strokeWeight(lw);
	textAlign(TOP, TOP);
	textSize(height / 25);
	textline = height / 25 * 1.1;
}
