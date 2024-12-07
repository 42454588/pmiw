class Pantalla{
  constructor(img){
  this.fondo= img;
  this.crearBoton();
  }
    
  crearBoton(){
    this.boton= new Botones;
  }
  
  cargarImagen(imagen){
    image(imagen,0,0,width,height);
  }
  
  dibujar(){
    this.cargarImagen(this.fondo);
    textAlign(CENTER, CENTER);
    fill(0); 
  }
  
    pantallaInicio(){
    this.dibujar();
    textSize(32);
    fill(255,255,0);
    text("ROAD TO NINJA", width / 2, height / 2 - 100);

    // Instrucciones del juego
    textSize(20);
    fill(255);
    text("1. Mueve a Naruto con las teclas de flecha.", width / 2, height / 2 - 50);
    text("2. Dispara con la tecla SHIFT.", width / 2, height / 2);
    text("3. Mata a todos los enemigos para ganar.", width / 2, height / 2 + 50);

    //botoncitos
    this.boton.dibujar("Iniciar",2);
    this.boton.dibujar("Creditos",1);
    
   
  }
  
    pantallaCreditos(){
    this.dibujar();
    textSize(32);
    fill(255);
    text("Desarrollado por:", width / 2, height / 2 - 50);
    text("Gimeno Casasco, Aaron - 119041/2", width / 2, height / 2);
    text("Castagnani, Lucio 118990/7", width / 2, height / 2 + 50);
    
    this.boton.dibujar("Regresar",1);
   }
   
    pantallaPerdiste(){
    textSize(32);
    fill(255, 0, 0);
    text("¡Perdiste!", width / 2, height / 2 - 20);
    
    this.boton.dibujar("Reiniciar",2);

   }
   
    pantallaGanaste(){
    textSize(32);
    fill(0, 255, 0);
    text("¡Ganaste!", width / 2, height / 2 - 20);
    
    this.boton.dibujar("Reiniciar",2);

   }
}
