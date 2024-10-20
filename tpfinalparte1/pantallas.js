//pregunta si la variable sFondo NO está sonando y si es correcto q no suena la reproduce en loop
function musicaFondo(){
 if (!sFondo.isPlaying()){
    sFondo.loop(true);
  }
}

//se cargan imagenes y textos
function cargarFondo(img, x, y, ancho, alto){
  image(img, x, y, ancho, alto);
}

//esta función se usa dentro y fuera de los botones
function cargarTexto(txt, x, y){
  push()
  noStroke();
  fill(0,0,0,80);
  rect(x+100,y+200,590,y+100);
  pop()
  push()
  textSize(20);
  fill(255,255,255);
  text(txt, x+100, y+200,590);
  noFill();
  pop()
}

function escenaN(img, x, y, an, al, txt, x2, y2, txt2, x3, y3, an2, al2, txt3, x4, y4, an3, al3){
    cargarFondo(img, x, y, an, al);
    cargarTexto(txt, x2, y2);
    boton(x3, y3, an2, al2, txt2);
    boton(x4, y4, an3, al3, txt3);
}


function cargarEscena(){
 if(estado == 0){
    escenaN(fondos[0], 0, 0, 640, 480, 0, -1000, 0, texto[52], 20, 420, 150, 50, texto[53], 470, 420, 150, 50);
  }
  else if(estado == -1){
   escenaN(fondos[27], 0, 0, 640, 480, texto[43], -80, 0, texto[58], 20, 420, 150, 50);
  }
   else if(estado == 1){
    escenaN(fondos[1], 0, 0, 640, 480, texto[22], -80, 0, texto[1], 20, 420, 150, 50, texto[2], 470, 420, 150, 50);
  }
  else if(estado == 2){
    escenaN(fondos[2], 0, 0, 640, 480, texto[23], -80, 0, texto[3], 20, 420, 150, 50, texto[4], 470, 420, 150, 50);
  }
   else if(estado == 3){
    escenaN(fondos[3], 0, 0, 640, 480, texto[24], -80, 0, texto[5], 20, 420, 150, 50);
  }
  else if(estado == 4){
    escenaN(fondos[4], 0, 0, 640, 480, texto[26], -80, 0, texto[5], 20, 420, 150, 50);
  }
    else if(estado == 5){
    escenaN(fondos[5], 0, 0, 640, 480, texto[28], -80, 0, texto[6], 20, 420, 150, 50);
  }
   else if(estado == 6){
    escenaN(fondos[6], 0, 0, 640, 480, texto[29], -80, 0, texto[7], 20, 420, 150, 50);
  }
   else if(estado == 7){
    escenaN(fondos[7], 0, 0, 640, 480, texto[30], -80, 0, texto[8], 20, 420, 150, 50);
  }
     else if(estado == 8){
    escenaN(fondos[8], 0, 0, 640, 480, texto[31], -80, 0, texto[9], 20, 420, 150, 50);
  }
      else if(estado == 9){
    escenaN(fondos[9], 0, 0, 640, 480, texto[32], -80, 0, texto[10], 20, 420, 150, 50);
  }
       else if(estado == 10){
    escenaN(fondos[10], 0, 0, 640, 480, texto[33], -80, 0, texto[11], 20, 420, 150, 50);
  }
     else if(estado == 11){
    escenaN(fondos[11], 0, 0, 640, 480, texto[34], -80, 0, texto[12], 20, 420, 150, 50);
  }
      else if(estado == 12){
    escenaN(fondos[28], 0, 0, 640, 480, texto[35], -80, 0, texto[13], 20, 420, 150, 50, texto[14], 470, 420, 150, 50);
  }
        else if(estado == 13){
    escenaN(fondos[12], 0, 0, 640, 480, texto[37], -80, 0, texto[15], 20, 420, 150, 50);
  }
     else if(estado == 14){
    escenaN(fondos[15], 0, 0, 640, 480, texto[38], -80, 0, texto[54], 20, 420, 150, 50);
  }
  else if(estado == 15){
    escenaN(fondos[16], 0, 0, 640, 480, texto[39], -80, 0, texto[16], 20, 420, 150, 50, texto[17], 470, 420, 150, 50);
}
 else if(estado == 17){
   escenaN(fondos[14], 0, 0, 640, 480, texto[36], -80, 0, texto[15], 20, 420, 150, 50);
}
 else if(estado == 16){
   escenaN(fondos[18], 0, 0, 640, 480, texto[41], -80, 0, texto[19], 20, 420, 150, 50, texto[18], 470, 420, 150, 50);
}
 else if(estado == 18){
   escenaN(fondos[24], 0, 0, 640, 480, texto[45], -80, 0, texto[6], 20, 420, 150, 50);
}
 else if(estado == 19){
  escenaN(fondos[20], 0, 0, 640, 480, texto[44], -80, 0, texto[2], 20, 420, 150, 50);
}
 else if(estado == 20){
  escenaN(fondos[19], 0, 0, 640, 480, texto[51], -80, 0, texto[6], 20, 420, 150, 50);
}
else if(estado == 21){
  escenaN(fondos[17], 0, 0, 640, 480, texto[42], -80, 0, texto[5], 20, 420, 150, 50);
}
else if(estado == 22){
  escenaN(fondos[16], 0, 0, 640, 480, texto[46], -80, 0, texto[21], 20, 420, 150, 50);
}
else if(estado == 23){
  escenaN(fondos[21], 0, 0, 640, 480, texto[49], -80, 0, texto[55], 20, 420, 150, 50);
}
else if(estado == 24){
  escenaN(fondos[22], 0, 0, 640, 480, texto[46], -80, 0, texto[20], 20, 420, 150, 50, texto[21], 470, 420, 150, 50);
}
else if(estado == 25){
   escenaN(fondos[24], 0, 0, 640, 480, texto[47], -80, 0, texto[6], 20, 420, 150, 50);
}
else if(estado == 26){
   escenaN(fondos[25], 0, 0, 640, 480, texto[48], -80, 0, texto[5], 20, 420, 150, 50);
}
else if(estado == 26){
   escenaN(fondos[25], 0, 0, 640, 480, texto[48], -80, 0, texto[5], 20, 420, 150, 50);
}
else if(estado == 27){
   escenaN(fondos[26], 0, 0, 640, 480, texto[50], -80, 0, texto[6], 20, 420, 150, 50);
}
}
 
