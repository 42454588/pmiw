//comisión 4+
//Gimeno Casasco Aaron - 119041/2
//https://youtu.be/z0qtEcj6tS4
//funciones para fondos, textos, estados y sonido en ese respectivo orden.

let fondos=[];
let texto=[];
let estado;
let sFondo;

function preload() {
   //para cargar todas las imagenes de una usando iteracion 
 for(let i=0; i<29; i++){
   fondos[i] = loadImage("data/imagenes/n"+i+".jpeg");
 }
 //para cargar todos los textos de una usando iteracion
 for(let i=0; i<59; i++){
   texto[i] = loadStrings("data/textos/texto"+i+".txt");
 }
  //cargar sonidos
 sFondo = loadSound("data/musicanaruto.mp3");

}


function setup() {
  createCanvas(640, 480);
  imageMode(RIGHT)
  estado = 0;
  textSize(14);
}

function draw() {
    print(mouseX+"/"+mouseY+" estado: "+estado);  
    cargarEscena();
}
