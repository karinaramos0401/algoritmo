
const year34 = (items) => {
  const vogais = ['a', 'e', 'i','o', 'u']


   return items.filter((item) => {
       return !vogais.includes(item)

   })
} 

console.log(year34(['a', 'b', 2, 3, 4, 5]))
