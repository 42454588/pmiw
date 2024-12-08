class programaP{
  constructor(musicaN, fondo) {
    this.crearPantalla(fondo);
    this.crearJuego(fondo);
    this.musica = musicaN;
    this.estado = 0;
    this.cred = false;
    this.mil = 0;
  }

  crearPantalla(fondo) {
    this.pantalla = new Pantalla(fondo);
  }

  crearJuego(fondo) {
    this.juego = new Juego(10, fondo);
  }

  reproduccion() {
    if (this.estado === 0) {
      this.pantalla.pantallaInicio();
    }

    if (this.estado === 1) {
      this.pantalla.pantallaCreditos();
    }

    if (this.estado === 2) {
      this.juego.dibujar();
    }

    if (this.estado === 2 && this.juego.Ganaste) {
      this.estado = 3;
      this.musica.stop(); 
    }

    if (this.estado === 2 && this.juego.perdiste) {
      this.estado = 4;
      this.musica.stop(); 
    }

    if (this.estado === 3) {
      this.pantalla.pantallaGanaste();
      this.juego.reiniciarJuegoGanaste();
    }

    if (this.estado === 4) {
      this.pantalla.pantallaPerdiste();
      this.juego.reiniciarJuegoPerdiste();
    }
  }

  tocoPantalla() {
    if (this.estado === 0) {
      let btnX = width / 2 - 50;
      let btnY = height / 2 + 100;
      let btnWidth = 100;
      let btnHeight = 40;

      if (mouseX > btnX && mouseX < btnX + btnWidth && mouseY > btnY && mouseY < btnY + btnHeight) {
        this.estado = 2; // Iniciar el juego desde la pantalla de inicio
        this.musica.loop(); // Iniciar la música cuando el juego comienza
      }

      let btnCreditosX = 10;
      let btnCreditosY = height - 50;
      if (mouseX > btnCreditosX && mouseX < btnCreditosX + btnWidth && mouseY > btnCreditosY && mouseY < btnCreditosY + btnHeight) {
        print("Botón de créditos clickeado");
        this.estado = 1; 
      }
    }

    if ((this.estado === 3) || (this.estado === 4)) {
      let btnX = width / 2 - 50;
      let btnY = height / 2 + 100;
      let btnWidth = 100;
      let btnHeight = 40;

      if (mouseX > btnX && mouseX < btnX + btnWidth && mouseY > btnY && mouseY < btnY + btnHeight) {
        this.estado = 0;
      }
    }

    if (this.estado === 1) {
      let btnRegresarX = 10;
      let btnRegresarY = height - 50;
      if (this.cred == false) {
        this.mil = millis();
        this.cred = true;
      }
      if (mouseX > btnRegresarX && mouseX < btnRegresarX + 100 && mouseY > btnRegresarY && mouseY < btnRegresarY + 40 && this.mil < millis()) {
        this.estado = 0;
        console.log("reg");
        this.cred = false;
      }
    }
  }

  tocoTecla() {
    if (!this.juego.perdiste) {
      this.juego.personaje.keyPressed(keyCode);
      if (keyCode === SHIFT) this.juego.personaje.dispararBala();
    }
  }

  soltoTecla() {
    if (!this.juego.perdiste) {
      this.juego.personaje.keyReleased(keyCode);
    }
  }
}
