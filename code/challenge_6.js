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
	rect(lugarX,height/2,100,100);
	rect(width/2,lugarY,100,100);
	lugarX += (velocidad * sentidoX);
	lugarY = lugarY;
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

	} else if (lugarY > height){

	}
}

/*
DESAFÍO 6
En el desafío 6 un rectángulo se mueve a lo ancho de la pantalla sin escaparse. Ustedes
tienen que completar el código para que el otro rectángulo se mueva de arriba a abajo
también sin escaparse. Para eso tienen que revisar la cuenta de la línea 42:
lugarY = lugarY. Además tienen que completar la función chequearAlto().
Si lo logran agregen un tercer rectángulo que se mueva en diagonal.
*/
