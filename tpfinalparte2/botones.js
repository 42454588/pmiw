
//Dibujamos los botones lo mas fácil posible.
function mousePressed() {
  
  if (objJuego.enPantallaInicio) {
    let btnX = width / 2 - 50;
    let btnY = height / 2 + 100;
    let btnWidth = 100;
    let btnHeight = 40;

   
    if (mouseX > btnX && mouseX < btnX + btnWidth && mouseY > btnY && mouseY < btnY + btnHeight) {
      objJuego.iniciarJuego(); // Iniciar el juego desde la pantalla de inicio
      sMusica.play();
    }

  
    let btnCreditosX = 10;
    let btnCreditosY = height - 50;
    if (mouseX > btnCreditosX && mouseX < btnCreditosX + btnWidth && mouseY > btnCreditosY && mouseY < btnCreditosY + btnHeight) {
      objJuego.mostrarCreditos(); 
    }
  } else if (objJuego.perdiste || objJuego.Ganaste) {
    let btnX = width / 2 - 50;
    let btnY = height / 2 + 20;
    let btnWidth = 100;
    let btnHeight = 40;

    if (mouseX > btnX && mouseX < btnX + btnWidth && mouseY > btnY && mouseY < btnY + btnHeight) {
      objJuego.reiniciarJuego(); 
    }
  } else if (objJuego.enPantallaCreditos) {
   
    let btnRegresarX = 10;
    let btnRegresarY = height - 50;
    if (mouseX > btnRegresarX && mouseX < btnRegresarX + 100 && mouseY > btnRegresarY && mouseY < btnRegresarY + 40) {
      objJuego.regresarAlInicio(); 
    }
  }
}

function musicaFondo(){
 if (!sMusica.isPlaying()){
    sMusica.loop(true);
  }
}
