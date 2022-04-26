function isDivisible(n, x, y) {
    let result = false
    if(n %  x == 0 && n % y == 0){
      result = true
    } 
    
    return result
  }