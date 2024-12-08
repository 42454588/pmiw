class Enemigo {
  constructor(posX, posY, tamaño = 60, dividido = false) {
    this.posX = posX;
    this.posY = posY;
    this.tamaño = tamaño;
    this.dividido = dividido; // Divide a los enemigos, pero en la mitad de su tamaño.
    this.miColor = color(random(255), random(255), random(255));
    this.vivo = true;
    this.velocidad = 0.5; 
  }
  
  dibujar() {
    if (this.vivo) {
      fill(this.miColor);
     image(imgEnemigo,this.posX, this.posY, this.tamaño, this.tamaño);
   
    }
  }
  
  matar() {
    this.vivo = false; 
  }
  
  haTocadoLaBala(bala) {
    if (this.vivo && dist(this.posX, this.posY, bala.posX, bala.posY) < this.tamaño / 2) {
      this.matar();
      return true;
    }
    return false;
  }

  dividir() {
    if (!this.dividido && this.tamaño > 15) { 
      this.dividido = true; 
      let nuevotamaño = this.tamaño / 1.5;
      return [
        new Enemigo(this.posX - nuevotamaño, this.posY, nuevotamaño, true), 
        new Enemigo(this.posX + nuevotamaño, this.posY, nuevotamaño, true)  
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
