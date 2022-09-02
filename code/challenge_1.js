/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "juana".
Como esta variable está afuera de las funciones la vamos
a poder llamar desde cualquier parte del código.
*/
let juana;

/*
La biblioteca p5js tiene dos funciones obligatorias que
siempre tienen que estar. Una es la función setup(). Esta
función se ejecuta una sóla vez al cargar la página en el
navegador.
*/
function setup() {
	createCanvas(windowWidth, windowHeight); //creamos un lienzo
	background(100,200,150); //elegimos un color de fondo
	juana = 1; //asignamos un valor a "juana"
	print("Hola, estás programando en javascript"); //imprimimos un mensaje en la consola
}

/*
La otra función obligatoria es la función draw(). Esta función
se ejecuta muchas veces por segundo (la computadora intenta que
sean 60 pero a veces no llega).
*/
function draw() {

}

/*
DESAFÍO 1
Tienen que usar la variable juana para contar en la consola. Tienen que
imprimir a juana pero haciendo que cambie de valor cada vez que se
ejecuta la función draw().
*/
