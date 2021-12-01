const year30 = (numero) => { 

  const piso = ['g', 'e', 't', 0, 't', 'h', 0]
  const pisoAndar = piso.slice(numero, piso.length)

  const array = []
  let achou = false 
  let counter = 0 

  while(!achou) {
    if(pisoAndar[counter] ===0) {
      achou = true
    } else {
      array.push(pisoAndar[counter])
        counter++
    }
  }

    return array
}

console.log(year30(5))
