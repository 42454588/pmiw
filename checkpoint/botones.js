class Botones{
  constructor(){
  this.ancho=40;
  this.alto=100;
  this.miColor= color(255,0,0);
  this.letraColor= color(255);
  }
  
  dibujar(texto,tipo){
    
    
   fill(this.miColor);
   textSize(20);
   
  // tipo 1= boton izquierdo - tipo 2= boton central 
    if (tipo === 1){
    rect(10, height - 50, this.alto, this.ancho);  
    fill(this.letraColor);
    text(texto, 60, height - 30);
    } else if (tipo === 2){
    rect(width / 2 - 50, height / 2 + 100, this.alto, this.ancho);
    fill(this.letraColor);
    text(texto, width / 2 , height / 2 + 120);
    }
   
    
  }
    
}
