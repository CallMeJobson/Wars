function squareOrSquareRoot(array) {
  
    let result = []
    
    array.forEach((x) =>{
      if(Number.isInteger(Math.sqrt(x))){
        result.push(Math.sqrt(x))
      }
      else{
        result.push(x * x)
      }
    })
    
    return result
  }