/*
Esto es un comentario y no es parte del código.
Primero vamos a definir dos variables llamadas "juana"
y "pedro". Como estas variables están afuera de las funciones
las vamos a poder llamar desde cualquier parte del código.
*/
let juana;
let pedro;

/*
La biblioteca p5js tiene dos funciones obligatorias que
siempre tienen que estar. Una es la función setup(). Esta
función se ejecuta una sóla vez al cargar la página en el
navegador.
*/
function setup() {
	createCanvas(windowWidth, windowHeight); //creamos un lienzo
	background(50,150,100); //elegimos un color de fondo
	juana = 1; //asignamos un valor a "juana"
	pedro = 1; //asignamos un valor a "pedro"
	stroke(50,50,150); //definimos un color para las líneas
	strokeWeight(5); //definimos el grosor de las líneas
	print("Hola, estás programando en javascript"); //imprimimos un mensaje en la consola
}

/*
La otra función obligatoria es la función draw(). Esta función
se ejecuta muchas veces por segundo (la computadora intenta que
sean 60 pero a veces no llega).
*/
function draw() {
	line(0,0,100,100);
}

/*
DESAFÍO 2
Tienen que usar las variables juana y pedro para dibujar líneas. Tiene que haber
dos líneas que empiecen en esquinas opuestas del lienzo y se encuentren en la
posición del mouse. Recuerden que tienen que agregar el código que resuelve el
desafío adentro de la función draw().
*/
