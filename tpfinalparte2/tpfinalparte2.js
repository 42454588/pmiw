//Tp final parte 2
//Gimeno Casasco, Aaron - 119041/2
//Castagnani, Lucio 118990/7
//++Link a youtube Aaron: https://youtu.be/am-nYRAXJtE

let objJuego;
let img;
let imgNave, imgEnemigo, imgBala;
let sMusica;

function preload() {
  img = loadImage('data/espacio.jpg');
  imgNave = loadImage('data/nave.png');
  imgEnemigo = loadImage('data/enemigo.png');
  imgBala = loadImage('data/bala.png');
  sMusica = loadSound("data/espacial.mp3");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(10);
}

function draw() {
  background(200);
  image(img, 0, 0, width, height);
  objJuego.dibujar();
}
// Se dispara con el SHIFT (es mas comodo)
function keyPressed() {
  if (!objJuego.perdiste) {
    objJuego.personaje.keyPressed(keyCode);
    if (keyCode === SHIFT) objJuego.personaje.dispararBala(); 
  }
}

function keyReleased() {
  if (!objJuego.perdiste) {
    objJuego.personaje.keyReleased(keyCode);
  }
}
