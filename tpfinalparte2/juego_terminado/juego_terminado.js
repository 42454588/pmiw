let objJuego;
let img;
let imgNave, imgEnemigo,imgBala;

function preload() {
  img = loadImage('data/espacio.jpg');
  imgNave=loadImage('data/nave.png')
  imgEnemigo=loadImage('data/enemigo.png')
  imgBala=loadImage('data/bala.png')
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

function keyPressed() {
  if (!objJuego.gameOver) {
    objJuego.personaje.keyPressed(keyCode);
    if (keyCode === SHIFT) objJuego.personaje.dispararBala(); // Disparo al presionar SHIFT
  }
}

function keyReleased() {
  if (!objJuego.gameOver) {
    objJuego.personaje.keyReleased(keyCode);
  }
}

function mousePressed() {
  if (objJuego.enPantallaInicio) {
    let btnX = width / 2 - 50;
    let btnY = height / 2 + 100;
    let btnWidth = 100;
    let btnHeight = 40;

    if (mouseX > btnX && mouseX < btnX + btnWidth && mouseY > btnY && mouseY < btnY + btnHeight) {
      objJuego.iniciarJuego(); // Iniciar el juego desde la pantalla de inicio
    }
  } else if (objJuego.gameOver || objJuego.win) {
    let btnX = width / 2 - 50;
    let btnY = height / 2 + 20;
    let btnWidth = 100;
    let btnHeight = 40;

    if (mouseX > btnX && mouseX < btnX + btnWidth && mouseY > btnY && mouseY < btnY + btnHeight) {
      objJuego.reiniciarJuego(); // Lleva a la pantalla de inicio en vez de reiniciar el juego
    }
  }
}
