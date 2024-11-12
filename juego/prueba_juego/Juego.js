class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = Math.floor(cantidadEnemigos / 2);
    this.crearPersonaje();
    this.crearEnemigos();
  }
  
  dibujar() {
    this.personaje.dibujar();
    
   
    for (let i = this.enemigos.length - 1; i >= 0; i--) {
      let enemigo = this.enemigos[i];
      enemigo.mover();  
      enemigo.dibujar();
    }
    
    this.controlarDisparosAEnemigos();
  }
  
  iniciar() {
  }
  
  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos.push(new Enemigo(i * 120 + 70, 100, 70)); 
    }
  }
  
  crearPersonaje() {
    this.personaje = new Personaje(width / 2, height - 50);
  }
  
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
  
  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      let nuevosEnemigos = [];
      
      for (let i = this.enemigos.length - 1; i >= 0; i--) {
        let enemigo = this.enemigos[i];
        
        if (enemigo.haTocadoLaBala(this.personaje.bala)) {
        
          if (!enemigo.vivo) {
            
            if (!enemigo.dividido) {
              let divididos = enemigo.dividir();
              nuevosEnemigos.push(...divididos);
            }
          }
        }
      }
      
      this.enemigos.push(...nuevosEnemigos); 
    }
  }
}
