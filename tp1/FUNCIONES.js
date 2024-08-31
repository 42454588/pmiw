function esPar(numero){
  return(numero%2==0);
}


function dibujarFondo (){
  for(let i = 0; i < cant1; i++){
    for(let h = 0; h < cant2; h++){
      if(esPar(h+i)){
        fill(255);
        rect(400+i * ancho,1+h * alto,ancho,alto); 
      }else{
        fill(0);
        rect(400+i * ancho,1+h * alto,ancho,alto); 
      }
    }
  }
}

function dibujarCuadro(a,b){
  for(let j = 0;  j < cant3; j++){
    for(let k = 0; k < cant4; k++){
      if(esPar(j+k)){
        noStroke();
        fill(a);
        rect(480+j * alto,94+k * ancho,alto,ancho); 
      }else{
        fill(b);
        rect(480+j * alto,94+k * ancho,alto,ancho); 
      }
    }
  }
} 
