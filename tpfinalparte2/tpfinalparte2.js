//Tp final parte 2
//Gimeno Casasco, Aaron - 119041/2
//Castagnani, Lucio 118990/7
//++Link a youtube Aaron: https://youtu.be/am-nYRAXJtE

let objPrograma;
let img;
let imgNave, imgEnemigo, imgBala;
let sMusica;

function preload() {
  img = loadImage('data/espacio.jpg');
  imgNave = loadImage('data/naruto.png');
  imgEnemigo = loadImage('data/enemigo.png');
  imgBala = loadImage('data/bala.png');
  sMusica = loadSound("data/musicanaruto.mp3");
}

function setup() {
  createCanvas(640, 480);
  objPrograma = new programaP(sMusica,img);
}

function draw() {
  objPrograma.reproduccion();
  print(objPrograma.estado);
 
}
// Se dispara con el SHIFT (es mas comodo)
function keyPressed() {
 objPrograma.tocoTecla();
}

function keyReleased() {
 objPrograma.soltoTecla();
}

function mousePressed() {
  objPrograma.tocoPantalla();



function musicaFondo(){
 if (!sMusica.isPlaying()){
    sMusica.loop(true);
  }
}
}
