class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = Math.floor(cantidadEnemigos / 2);
    this.iniciarJuego(); 
    this.perdiste = false;
    this.Ganaste = false;
    this.enPantallaInicio = true; 
    this.enPantallaCreditos = false; 
  }

  iniciarJuego() {
    this.crearPersonaje();
    this.crearEnemigos();
    this.perdiste = false;
    this.Ganaste = false;
    this.enPantallaInicio = false; 
  }

  dibujar() {
    if (this.enPantallaInicio) {
      this.mostrarPantallaInicio(); 
    } else if (this.enPantallaCreditos) {
      this.mostrarPantallaCreditos(); 
    } else if (!this.perdiste && !this.Ganaste) {
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
    } else if (this.Ganaste) {
      this.mostrarPantallaGanaste();
    } else {
      this.mostrarPantallaperdiste();
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

  mostrarPantallaperdiste() {
    background(0, 100);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 0, 0);
    text("Perdiste", width / 2, height / 2 - 20);

    // Botón de reinicio
    fill(255, 0, 0);
    rect(width / 2 - 50, height / 2 + 20, 100, 40);
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2, height / 2 + 40);
  }

  mostrarPantallaGanaste() {
    background(0, 100);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0, 255, 0);
    text("Ganaste!", width / 2, height / 2 - 20);

    // Botón de reinicio
    fill(255, 0, 0);
    rect(width / 2 - 50, height / 2 + 20, 100, 40);
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2, height / 2 + 40);
  }

  mostrarPantallaInicio() {
    background(0, 100);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255,255,0);
    text("Space Invadersn´t", width / 2, height / 2 - 100);

    // Instrucciones del juego
    textSize(20);
    fill(255);
    text("1. Mueve tu nave con las teclas de flecha.", width / 2, height / 2 - 50);
    text("2. Dispara con la tecla SHIFT.", width / 2, height / 2);
    text("3. Mata a todos los enemigos para ganar.", width / 2, height / 2 + 50);

    // Botón de inicio
    fill(255, 0, 0);
    rect(width / 2 - 50, height / 2 + 100, 100, 40);
    fill(0);
    textSize(20);
    text("Iniciar", width / 2, height / 2 + 120);

    // Botón de créditos
    fill(255, 0, 0);
    rect(10, height - 50, 100, 40);
    fill(0);
    textSize(20);
    text("Créditos", 60, height - 30);
  }

  mostrarPantallaCreditos() {
    background(0, 100);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("Desarrollado por:", width / 2, height / 2 - 50);
    text("Gimeno Casasco, Aaron - 119041/2", width / 2, height / 2);
    text("Castagnani, Lucio 118990/7", width / 2, height / 2 + 50);

    // Botón  de regresar
    fill(255, 0, 0);
    rect(10, height - 50, 100, 40);
    fill(0);
    textSize(20);
    text("Regresar", 60, height - 30);
  }

  reiniciarJuego() {
    this.enPantallaInicio = true;
    this.perdiste = false;
    this.Ganaste = false;
    this.enPantallaCreditos = false;
  }

  regresarAlInicio() {
    this.enPantallaCreditos = false;
    this.enPantallaInicio = true;
  }

  mostrarCreditos() {
    this.enPantallaInicio = false;
    this.enPantallaCreditos = true;
  }
}

function musicaFondo(){
 if (!fMusica.isPlaying()){
    fMusica.loop(true);
  }
}
