/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "fondo" y
otra llamada "figura". Como estas variables están afuera
de las funciones las vamos a poder llamar desde cualquier
parte del código.
*/
let fondo;
let figura;
/*
La biblioteca p5js tiene dos funciones obligatorias que
siempre tienen que estar. Una es la función setup(). Esta
función se ejecuta una sóla vez al cargar la página en el
navegador.
*/
function setup() {
	createCanvas(windowWidth, windowHeight); //creamos un lienzo
	fondo = color(0,0,0); //definimos fondo como un color
	figura = color(255,255,255); //definimos figura como un color
	/*
	La función color(rojo, verde, azul) sirve para crear colores. Los números
	que le pasamos como rojo, verde y azul tienen que estar entre 0 y 255.
	*/
	background(fondo); //pintamos el fondo con nuestro color
	noStroke();
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
	figura = color(255,255,255);
	fill(figura);
	rect(10,10,100,100);
}

/*
DESAFÍO 4
Tienen que usar las variables "fondo" y "figura" para que los colore del
fondo y el rectángulo cambien cuando mueven el cursor por encima de la ventana.
El color "figura" tiene que ser el opuesto del color "fondo". Como cada canal
del color (rojo, verde y azul) tiene un valor entre 0 y 255, el color opuesto
se encuentra restando. Por ejemplo el opuesto de color(120,50,50) es
color (255-120, 255-50, 255-50). Recuerden que tienen que modificar el código
que resuelve el desafío adentro de la función draw().
*/
