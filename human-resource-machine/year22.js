const year22 = (num) => {
  let anterior = 0;
  let resultado = 1;
  
  for(let i = 1; i < num; i++ ) {
      const aux = anterior + resultado
      anterior = resultado
      resultado = aux   
  }
  return resultado

}

console.log(year22(15))

