 const year39 = (num) => {

   let counter = 0
    const arr = [[1,2,3], [6,4,5]]
    const coord = []
  
    arr.forEach((valueX, indexX) => {
      valueX.forEach((valueY, indexY) => {
  
        if(counter < num) { 
          counter++ 
      } 
  
      if (counter === num) {
        coord.push(indexX)
        coord.push(indexY)
      }
  
      })
  
  })
    return coord
 }
 
 console.log(year39(6))

