const year32 = (number) => {
  const piso = [2,3,6,6,5] 
  const res = piso.reduce((prev, atual) => {
    if(atual === number)  return prev + 1 
       // só vou retornar se o atual for igual ao número 
        return prev
    } , 0
  )
    return res 
  
}

console.log(year32(3))

