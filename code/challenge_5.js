/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "fondo" y
otra llamada "figura". Como estas variables están afuera
de las funciones las vamos a poder llamar desde cualquier
parte del código.
*/
let velocidad;
let lugar;
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
	lugar = 0;
	noStroke();
	print("Hola, estás programando en javascript"); //imprimimos un mensaje en la consola
}

/*
La otra función obligatoria es la función draw(). Esta función
se ejecuta muchas veces por segundo (la computadora intenta que
sean 60 pero a veces no llega).
*/
function draw() {
	background(0,0,0);
	rect(lugar,height/2,100,100);
	//Acá tienen que poner la cuenta para que el rectángulo avance hacia la derecha.
}

/*
La función mousePressed se ejecuta cuando hacemos click con el mouse
sobre el lienzo.
*/
function mousePressed() {
	//Acá tienen que hacer que la velocidad cambie cuando hacen click.
}


/*
DESAFÍO 5
El desafío 5 tiene 2 partes. Primero tienen que usar la variable lugar para que
el rectángulo blanco avance hacia la derecha. Después tienen que hacer que,
al hacer click, se mueva cada vez más rápido.
*/
