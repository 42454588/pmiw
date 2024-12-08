class Juego {
  constructor(cantidad,img) {
    this.cantidadEnemigos = Math.floor(cantidad / 2);
    this.perdiste = false;
    this.Ganaste = false;
    this.crearPersonaje();
    this.crearEnemigos();
    this.fondo=img;
  }

   cargarImagen(imagen){
    image(imagen,0,0,width,height);
  }

  dibujar() {
      
      this.cargarImagen(this.fondo);
      this.personaje.dibujar();
     
      for (let i = this.enemigos.length - 1; i >= 0; i--) {
        let enemigo = this.enemigos[i];
        enemigo.mover();
        enemigo.dibujar();
      }

      this.controlarDisparosAEnemigos();
      this.verificarColisionConPersonaje();

      // Si ya no quedan enemigos, ganamos.
      if (this.enemigos.filter(enemigo => enemigo.vivo).length === 0) {
        this.Ganaste = true; 
      }

  }

  verificarColisionConPersonaje() {
    for (let enemigo of this.enemigos) {
      if (enemigo.vivo && dist(this.personaje.posX, this.personaje.posY, enemigo.posX, enemigo.posY) < enemigo.tamaño / 2) {
        this.perdiste = true;
        break;
      }
    }
  
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

  

  reiniciarJuegoPerdiste() {
    if(this.perdiste){
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if(this.enemigos[i].vivo)
        this.enemigos[i].vivo=false;
    }
    }
    this.perdiste = false;
    this.crearEnemigos();
    this.personaje.posX=width / 2;
    this.personaje.posY =height - 50;
  }
 

  reiniciarJuegoGanaste() {

    this.Ganaste = false;
    this.crearEnemigos();
    this.personaje.posX=width / 2;
    this.personaje.posY =height - 50;
  }
 
 

  musicaFondo(){
 if (!fMusica.isPlaying()){
    fMusica.loop(true);
  }
}
}
