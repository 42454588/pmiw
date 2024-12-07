class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.bala = new Bala(this.posX, this.posY - 25);
    
    // Variables de movimiento
    this.moverIzquierda = false;
    this.moverDerecha = false;
    this.moverArriba = false;
    this.moverAbajo = false;
  }

  dibujar() {
    // Movimientos de la nave
    if (this.moverIzquierda) this.moverIzquierdaPersonaje();
    if (this.moverDerecha) this.moverDerechaPersonaje();
    if (this.moverArriba) this.moverArribaPersonaje();
    if (this.moverAbajo) this.moverAbajoPersonaje();
    
    this.bala.dibujar();

   
    image(imgNave,this.posX+15, this.posY, 50, 50);
  }

  moverDerechaPersonaje() {
    this.posX += 2;
  }

  moverIzquierdaPersonaje() {
    this.posX -= 2;
  }

  moverArribaPersonaje() {
    this.posY -= 2;
  }

  moverAbajoPersonaje() {
    this.posY += 2;
  }

 
  dispararBala() {
    if (!this.bala.disparada) {
      this.bala = new Bala(this.posX+27, this.posY - 25); 
      this.bala.disparar();
    }
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }

 
  keyPressed(keyCode) {
    if (keyCode === LEFT_ARROW) this.moverIzquierda = true;
    if (keyCode === RIGHT_ARROW) this.moverDerecha = true;
    if (keyCode === UP_ARROW) this.moverArriba = true;
    if (keyCode === DOWN_ARROW) this.moverAbajo = true;
  }

 
  keyReleased(keyCode) {
    if (keyCode === LEFT_ARROW) this.moverIzquierda = false;
    if (keyCode === RIGHT_ARROW) this.moverDerecha = false;
    if (keyCode === UP_ARROW) this.moverArriba = false;
    if (keyCode === DOWN_ARROW) this.moverAbajo = false;
  }
}
