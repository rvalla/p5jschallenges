/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "fondo" y
otra llamada "figura". Como estas variables están afuera
de las funciones las vamos a poder llamar desde cualquier
parte del código.
*/
let velocidad;
let lugarX;
let lugarY;
let sentidoX;
let sentidoY;
/*
La biblioteca p5js tiene dos funciones obligatorias que
siempre tienen que estar. Una es la función setup(). Esta
función se ejecuta una sóla vez al cargar la página en el
navegador.
*/
function setup() {
	createCanvas(windowWidth, windowHeight); //creamos un lienzo
	background(0,0,0);
	fill(255,255,255);
	velocidad = 2;
	lugarX = 0;
	lugarY = 0;
	sentidoX = 1;
	sentidoY = 1;
	stroke(255);
	strokeWeight(10);
	print("Hola, estás programando en javascript"); //imprimimos un mensaje en la consola
}

/*
La otra función obligatoria es la función draw(). Esta función
se ejecuta muchas veces por segundo (la computadora intenta que
sean 60 pero a veces no llega).
*/
function draw() {
	stroke(255,255,255); //Este es el color de los puntos
	point(lugarX, lugarY);
	lugarX += (velocidad * sentidoX);
	lugarY += (velocidad * sentidoY);
	chequearAncho();
	chequearAlto();
}

/*
La función mousePressed se ejecuta cuando hacemos click con el mouse
sobre el lienzo.
*/
function mousePressed() {
	velocidad += 2;
}

/*
No sólo existen funciones propias de p5. ¡Podemos definir las nuestras!
Se definen con un nombre (que no se puede repetir) después de la
palabra clave "function". Siempre hay que poner después "(){ ... }"
*/
function chequearAncho(){
	if (lugarX < 0){
		sentidoX = 1;
	} else if (lugarX > width){
		sentidoX = -1;
	}
}

function chequearAlto(){
	if (lugarY < 0){
		sentidoY = 1;
	} else if (lugarY > height){
		sentidoY = -1;
	}
}

/*
DESAFÍO 7
En el desafío 7 un punto recorre la pantalla dibujando una línea. Rebota contra
los bordes de la ventana. Ustedes tienen que hacer dos cosas. La primera es que
el color del punto vaya cambiando según el lugar de la pantalla en donde está.
La otra es que otro punto haga el recorrido opuesto (empezando en la esquina
opuesta) y dibuje otra línea.
*/
