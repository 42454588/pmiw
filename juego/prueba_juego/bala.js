class Bala {
  constructor(posX, posY) {
    this.posX = posX;         
    this.posY = posY - 25;   
    this.disparada = false; 
  }
  
  dibujar() {
    if (this.disparada) {
      fill(0, 255, 0);
      ellipse(this.posX, this.posY, 5, 5);
      this.mover();
      if (this.posY < 0) { 
        this.disparada = false; 
      }
    }
  }
  
  mover() {
    this.posY -= 20; 
  }
  
  disparar() {
    this.disparada = true;
  }
}
