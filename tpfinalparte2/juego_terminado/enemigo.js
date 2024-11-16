class Enemigo {
  constructor(posX, posY, tamaño = 60, dividido = false) {
    this.posX = posX;
    this.posY = posY;
    this.tamaño = tamaño;
    this.dividido = dividido; // Nuevo atributo para controlar si ya se dividió
    this.miColor = color(random(255), random(255), random(255));
    this.vivo = true;
    this.velocidad = 0.5; // Velocidad de movimiento hacia abajo
  }
  
  dibujar() {
    if (this.vivo) {
      fill(this.miColor);
     image(imgEnemigo,this.posX, this.posY, this.tamaño, this.tamaño);
   
    }
  }
  
  matar() {
    this.vivo = false; // El enemigo muere con una sola colisión
  }
  
  haTocadoLaBala(bala) {
    if (this.vivo && dist(this.posX, this.posY, bala.posX, bala.posY) < this.tamaño / 2) {
      this.matar();
      return true;
    }
    return false;
  }

  dividir() {
    if (!this.dividido && this.tamaño > 15) { // Solo divide si no se ha dividido antes
      this.dividido = true; // Marca que este enemigo ya se dividió
      let nuevotamaño = this.tamaño / 2;
      return [
        new Enemigo(this.posX - nuevotamaño, this.posY, nuevotamaño, true), // Enemigo a la izquierda
        new Enemigo(this.posX + nuevotamaño, this.posY, nuevotamaño, true)  // Enemigo a la derecha
      ];
    }
    return [];
  }

  mover() {
    this.posY += this.velocidad; // Mover el enemigo hacia abajo
    
    // Si el enemigo llega al final de la pantalla, reiniciar su posición a la parte superior
    if (this.posY > height) {
      this.posY = 0;
    }
  }
}
