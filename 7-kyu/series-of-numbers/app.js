function getSum( a,b )
{
   //Good luck!
  let sum = 0
  if(a > b){
      for(let i = b; i <= a ; i++ ) {
        sum += i
      }
      return sum
    }
  for(let i = a; i <= b; i++){
    sum += i
  }
  return sum
 
}