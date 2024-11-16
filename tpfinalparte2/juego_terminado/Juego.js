class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = Math.floor(cantidadEnemigos / 2);
    this.iniciarJuego(); // Inicializa el juego
    this.gameOver = false;
    this.win = false;
    this.enPantallaInicio = true; // Pantalla de inicio activada por defecto
  }

  // Función para iniciar o reiniciar el juego
  iniciarJuego() {
    this.crearPersonaje();
    this.crearEnemigos();
    this.gameOver = false;
    this.win = false;
    this.enPantallaInicio = false; // Desactivamos la pantalla de inicio
  }

  dibujar() {
    if (this.enPantallaInicio) {
      this.mostrarPantallaInicio(); // pantalla de inicio
    } else if (!this.gameOver && !this.win) {
      this.personaje.dibujar();
     
      for (let i = this.enemigos.length - 1; i >= 0; i--) {
        let enemigo = this.enemigos[i];
        enemigo.mover();
        enemigo.dibujar();
      }

      this.controlarDisparosAEnemigos();
      this.verificarColisionConPersonaje();

      // Verificar si el jugador ha ganado
      if (this.enemigos.filter(enemigo => enemigo.vivo).length === 0) {
        this.win = true; // Si no quedan enemigos vivos, el jugador gana
      }
    } else if (this.win) {
      this.mostrarPantallaWin();
    } else {
      this.mostrarPantallaGameOver();
    }
  }

  verificarColisionConPersonaje() {
    for (let enemigo of this.enemigos) {
      if (enemigo.vivo && dist(this.personaje.posX, this.personaje.posY, enemigo.posX, enemigo.posY) < enemigo.tamaño / 2) {
        this.gameOver = true;
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

  mostrarPantallaGameOver() {
    background(0, 100);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2 - 20);

    // Botón de reinicio que lleva a la pantalla de inicio
    fill(255);
    rect(width / 2 - 50, height / 2 + 20, 100, 40);
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2, height / 2 + 40);
  }

  mostrarPantallaWin() {
    background(0, 100);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0, 255, 0);
    text("You Win!", width / 2, height / 2 - 20);

    // Botón de reinicio que lleva a la pantalla de inicio
    fill(255);
    rect(width / 2 - 50, height / 2 + 20, 100, 40);
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2, height / 2 + 40);
  }

  mostrarPantallaInicio() {
    background(0, 100);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("Instrucciones del Juego", width / 2, height / 2 - 100);

    // Instrucciones del juego
    textSize(20);
    fill(255);
    text("1. Mueve tu nave con las teclas de flecha.", width / 2, height / 2 - 50);
    text("2. Dispara con la tecla SHIFT.", width / 2, height / 2);
    text("3. Mata a todos los enemigos para ganar.", width / 2, height / 2 + 50);

    // Botón de inicio para comenzar el juego
    fill(255);
    rect(width / 2 - 50, height / 2 + 100, 100, 40);
    fill(0);
    textSize(20);
    text("Iniciar Juego", width / 2, height / 2 + 120);
  }

  reiniciarJuego() {
    this.enPantallaInicio = true; // Regresar a la pantalla de inicio
  }
}
