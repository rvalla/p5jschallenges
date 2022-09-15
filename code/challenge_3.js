/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "fondo".
Como esta variable está afuera de las funciones
la vamos a poder llamar desde cualquier parte del código.
*/
let fondo;

/*
La biblioteca p5js tiene dos funciones obligatorias que
siempre tienen que estar. Una es la función setup(). Esta
función se ejecuta una sóla vez al cargar la página en el
navegador.
*/
function setup() {
	createCanvas(windowWidth, windowHeight); //creamos un lienzo
	fondo = color(0,0,0); //definimos fondo como un color
	/*
	La función color(rojo, verde, azul) sirve para crear colores. Los números
	que le pasamos como rojo, verde y azul tienen que estar entre 0 y 255.
	*/
	background(fondo); //pintamos el fondo con nuestro color
	print("Hola, estás programando en javascript"); //imprimimos un mensaje en la consola
}

/*
La otra función obligatoria es la función draw(). Esta función
se ejecuta muchas veces por segundo (la computadora intenta que
sean 60 pero a veces no llega).
*/
function draw() {
	fondo = color(0,0,0);
	background(fondo);
}

/*
DESAFÍO 3
Tienen que usar la variable fondo para que el color del fondo cambie cuando
mueven el cursor por encima de la ventana. El color tiene que ser más rojo
a medida que mueven el cursor hacia la derecha y más verde a medida que
mueven el cursor hacia abajo (necesitan las variables mouseX y mouseY).
Recuerden que tienen que agregar el código que resuelve el desafío adentro
de la función draw().
*/
