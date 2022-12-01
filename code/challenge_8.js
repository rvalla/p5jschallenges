/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "altura"
y otra variable llamada "error".
Como estas variables están afuera de las funciones las
vamos a poder llamar desde cualquier parte del código.
*/
let altura;
let error;
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
	altura = 10;
	error = 0;
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
	dibujarLinea();
}

function dibujarLinea(a) {
	for (let i = 0; i < width; i++){ //¡Esto es un bucle!
		point(i, altura + error);
	}
}

function aumentarAltura(){
	altura += 10;
}

function actualizarError(){
	error += random() - 0.5;
}

/*
DESAFÍO 8
Este programa dibuja una línea a lo ancho de la pantalla. Para hacerlo usa un bucle (está adentro de la función
dibujarLinea()). También existen la función aumentarAltura() y actualizarError(). Ustedes tienen que
decidir en qué lugares del código llamar a las funciones aumentarAltura() y actualizarError() para que
aparezcan muchas líneas irregulares en la pantalla.
*/
