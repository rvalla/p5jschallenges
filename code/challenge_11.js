/*
Esto es un comentario y no es parte del código.
Primero vamos a definir una variable llamada "pelota".
En esta variable vamos a guardar un objeto que representa una pelota.
*/
let pelota;
/*
La biblioteca p5js tiene dos funciones obligatorias que
siempre tienen que estar. Una es la función setup(). Esta
función se ejecuta una sóla vez al cargar la página en el
navegador.
*/
function setup() {
	createCanvas(windowWidth, windowHeight); //creamos un lienzo
	background(25);
	frameRate(60);
	pelota = new ball(color(200,100,100), 35, random(width), random(height)); //creamos un objeto pelota
	print("Hola, estás programando en javascript"); //imprimimos un mensaje en la consola
}

/*
La otra función obligatoria es la función draw(). Esta función
se ejecuta muchas veces por segundo (la computadora intenta que
sean 60 pero a veces no llega).
*/
function draw() {
	background(25);
	fill(50,100,200);
	pelota.update();
	if (dist(mouseX,mouseY,pelota.x, pelota.y) < 35){
		pelota.accelerate(mouseX - pmouseX, mouseY - pmouseY); //aceleramos la pelota cuando le pegamos
	}
	ellipse(mouseX,mouseY,35,35);
	pelota.display(); //dibujamos la pelota (ella sabe a donde está)
	chequearParedes(); //hacemos que no se escape de la pantalla
}

function chequearParedes(){
	if (pelota.x < 0) {
		pelota.x = width;
	} else if (pelota.x > width){
		pelota.x = 0;
	}
	if (pelota.y < 0) {
		pelota.y = height;
	} else if (pelota.y > height){
		pelota.y = 0;
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
	if (key === "r"){ //¡Esto es un condicional!
		pelota.reset();
	}
}

/*
DESAFÍO 11
Este programa dibuja una pelota. En la posición del mouse hay otra pelota.
Si las pelotas se chocan, la pelota impactada acelera y se mueve.
Inventen un juego con las pelotas. Hagan los cambios que necesiten.
*/
