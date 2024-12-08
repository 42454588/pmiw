function boton(x, y, ancho, alto, txt){
  if (sector(x, y, ancho, alto)){
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
    rect(x,y,ancho,alto);
    push()
    textAlign(CENTER);
    fill(255,255,255);
    text(txt,x+(ancho/2),y+(alto/2)+5);
    noFill();
    pop()
}

function sector(sx, sy, sancho, salto) {
  return mouseX > sx && mouseX < sx+sancho && mouseY > sy && mouseY < sy+salto;
}

function clickbtn(bx,by,bal,ban,target){
    if(sector(bx,by,bal,ban)){
     
      estado = target
    }
  }

function mousePressed(){
  musicaFondo();
 
 //pantalla principal
 if(estado === 0){
   clickbtn(20, 420, 150, 50, -1);
   clickbtn(470, 420, 150, 50, 1);
 }
  else if(estado === -1){
   clickbtn(20, 420, 150, 50, 0);
}
 else if(estado === 1){
  clickbtn(20, 420, 150, 50, 2);
   clickbtn(470, 420, 150, 50, 3);
}
 else if(estado === 2){
  clickbtn(20, 420, 150, 50, 4);
   clickbtn(470, 420, 150, 50, 3);
}
 else if(estado === 4){
  clickbtn(20, 420, 150, 50, 5);
}
else if(estado === 5){
  clickbtn(20, 420, 150, 50, 0);
}
else if(estado === 3){
  clickbtn(20, 420, 150, 50, 6);
}
else if(estado === 6){
  clickbtn(20, 420, 150, 50, 7);
}
else if(estado === 7){
  clickbtn(20, 420, 150, 50, 8);
}
else if(estado === 8){
  clickbtn(20, 420, 150, 50, 9);
}
else if(estado === 9){
  clickbtn(20, 420, 150, 50, 10);
}
else if(estado === 10){
  clickbtn(20, 420, 150, 50, 11);
}
else if(estado === 10){
  clickbtn(20, 420, 150, 50, 11);
}
else if(estado === 11){
 clickbtn(20, 420, 150, 50, 12);
}
 else if(estado === 12){
  clickbtn(20, 420, 150, 50, 13);
  clickbtn(470, 420, 150, 50, 17);
}
 else if(estado === 13){
  clickbtn(20, 420, 150, 50, 14);
}
 else if(estado === 14){
  clickbtn(20, 420, 150, 50, 15);
}
else if(estado === 17){
  clickbtn(20, 420, 150, 50, 14);
}
else if(estado === 15){
  clickbtn(20, 420, 150, 50, 16);
  clickbtn(470, 420, 150, 50, 21);
}
else if(estado === 16){
  clickbtn(20, 420, 150, 50, 18);
  clickbtn(470, 420, 150, 50, 19);
}
else if(estado === 18){
  clickbtn(20, 420, 150, 50, 0);
}
else if(estado === 19){
  clickbtn(20, 420, 150, 50, 20);
}
else if(estado === 20){
  clickbtn(20, 420, 150, 50, 0);
}
else if(estado === 21){
  clickbtn(20, 420, 150, 50, 22);
}
else if(estado === 22){
  clickbtn(20, 420, 150, 50, 23);
}
else if(estado === 23){
  clickbtn(20, 420, 150, 50, 24);
}
else if(estado === 24){
  clickbtn(20, 420, 150, 50, 25)
    clickbtn(470, 420, 150, 50, 26);
}
else if(estado === 25){
  clickbtn(20, 420, 150, 50, 0);
}
else if(estado === 26){
  clickbtn(20, 420, 150, 50, 27);
}
else if(estado === 27){
  clickbtn(20, 420, 150, 50, 0);
}
}
