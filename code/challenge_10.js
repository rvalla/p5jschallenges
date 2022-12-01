/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "altura"
y otra variable "largo".
Como esta variable está afuera de las funciones la
vamos a poder llamar desde cualquier parte del código.
*/
let altura;
let largo;
let margenX;
let margenY;
/*
La biblioteca p5js tiene dos funciones obligatorias que
siempre tienen que estar. Una es la función setup(). Esta
función se ejecuta una sóla vez al cargar la página en el
navegador.
*/
function setup() {
	createCanvas(windowWidth, windowHeight); //creamos un lienzo
	background(25);
	frameRate(24);
	altura = 50;
	largo = 50;
	margenY = height / 2 - altura / 2
	margenX = width / 2 - largo / 2
	stroke(random()*255,random()*255,random()*255);
	strokeWeight(1);
	print("Hola, estás programando en javascript"); //imprimimos un mensaje en la consola
}

/*
La otra función obligatoria es la función draw(). Esta función
se ejecuta muchas veces por segundo (la computadora intenta que
sean 60 pero a veces no llega).
*/
function draw() {
	dibujarVerticales();
	dibujarHorizontales();
	dibujarDiagonales();
}

function dibujarVerticales() {
	for (let i = 0; i < width / 5; i++){ //¡Esto es un bucle!
		line(i * 5, margenY, i * 5, margenY + altura);
	}
}

function dibujarHorizontales() {
	let margen = width / 2 - largo / 2
	for (let i = 0; i < height / 5; i++){ //¡Esto es un bucle!
		line(margenX, i * 5, margenX + largo, i * 5);
	}
}

function dibujarDiagonales() {
	for (let i = 0; i < height / 5; i++){ //¡Esto es un bucle!
		
	}
}

/*
La función mousePressed se ejecuta cuando hacemos click con el mouse
sobre el lienzo.
*/
function mousePressed() {
	//¿Qué van a poner acá?
}

/*
La función keyPressed se ejecuta cuando tocamos alguna tecla en el teclado. Hace
falta indicar qué hacer según qué tecla tocamos.
*/
function keyPressed() {
	if (key === "c"){ //¡Esto es un condicional!
		//¿Qué van a poner acá?
	}
}

/*
DESAFÍO 10
Este programa dibuja líneas a lo ancho y alto de la pantalla. ¡Y se cruzan! Primero tienen
que editar la función dibujarDiagonales() para que el programa dibuje líneas en diagonal.
Después hagan lo que quieran... ¡Lúzcanse!
*/
