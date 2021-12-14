const isPrime = (num) => { 
  for(let i = 2; i < num; i++)
    if(num % i === 0 ) return false

    return num > 1
}


const factor = (number) => {
  const arr = []
  for(let i = number; i >= 2; i--) {
    if(number % i === 0) {
      if(isPrime(i)) arr.push(i)
    }
  }
      return arr 
}

console.log(factor(12))
