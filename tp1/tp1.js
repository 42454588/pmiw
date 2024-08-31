//Gimeno Aaron Agustín - Comision 4
//TP#1 OpArt
//https://youtu.be/CibAexoIkKw

let cant1,cant2,cant3,cant4;
let alto, ancho;
let obrA;
let tege,emi;

function preload(){
 obrA = loadImage("data/obrA.png");
}


function setup() {
  createCanvas(800,400);
  rectMode(CORNER);
  background(0);
  cant1 = 10;
  cant2 = 40;
  cant3 = 24;
  cant4 = 6;
  alto = 10.62;
  ancho = 400/10;
  tege=color(255);
  emi=color(0);
}


function draw() {
  image(obrA,0,0);

  dibujarFondo();

  dibujarCuadro(emi,tege);
  print(mouseX + "/" + mouseY);
  print(alto);
}

function keyPressed(){
  if(key=='e'){
   emi= color(random(255),random(255),random(255));
   tege= color(random(255),random(255),random(255));
  }
}

function mousePressed(){
 tege=color(255);
  emi=color(0);
}
