

class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.vida = 1;
    this.bala = new Bala();
  }

  dibujar() {
    this.bala.dibujar();

    fill(this.miColor);
    triangle(this.posX, this.posY - 25,       
             this.posX - 25, this.posY + 25,  
             this.posX + 25, this.posY + 25); 
  } 

  teclaPresionada(keyIsPressed) {
    if (keyIsPressed == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyIsPressed == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyIsPressed == UP_ARROW) {
      this.moverArriba();
    } else if (keyIsPressed == DOWN_ARROW) {
      this.moverAbajo();
    } else if (keyIsPressed == ENTER) {
      this.dispararBala();
    }
  }

  moverDerecha() {
    this.posX += 40;
  }

  moverIzquierda() {
    this.posX -= 40;
  }

  moverArriba() {
    if (this.posY > 25) {
      this.posY -= 30;
    }
  }

  moverAbajo() {
    if (this.posY < height - 25) {
      this.posY += 30;
    }
  }

  estaVivo() {
  }

  dispararBala() {
    this.bala = new Bala(this.posX, this.posY - 25); 
    this.bala.disparar();
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }
}
