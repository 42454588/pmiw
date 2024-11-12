class Enemigo {
  constructor(posX, posY, tamaño = 60, dividido = false) {
    this.posX = posX;
    this.posY = posY;
    this.tamaño = tamaño;
    this.dividido = dividido; 
    this.miColor = color(random(255), random(255), random(255));
    this.vivo = true;
    this.velocidad = 0.2; 
  }
  
  dibujar() {
    if (this.vivo) {
      fill(this.miColor);
      ellipse(this.posX, this.posY, this.tamaño, this.tamaño);
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
      let nuevotamaño = this.tamaño / 2;
      return [
        new Enemigo(this.posX - nuevotamaño, this.posY, nuevotamaño, true), 
        new Enemigo(this.posX + nuevotamaño, this.posY, nuevotamaño, true)  
      ];
    }
    return [];
  }

  mover() {
    this.posY += this.velocidad; 
    
   
    if (this.posY > height) {
      this.posY = 0;
    }
  }
}
