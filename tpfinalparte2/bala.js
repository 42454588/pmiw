class Bala {
  constructor(posX, posY) {
    this.posX = posX;         
    this.posY = posY - 25;   
    this.disparada = false; 
  }
  
  dibujar() {
    if (this.disparada) {
      image(imgBala,this.posX, this.posY, 40, 40);
      this.mover();
      if (this.posY < 0) { 
        this.disparada = false; 
      }
    }
  }
  
  mover() {
    this.posY -= 10; 
  }
  
  disparar() {
    this.disparada = true;
  }
}
