function findMultiples(integer, limit) {
    //your code here
    let result = []
    for(let x = integer; x <= limit; x++){
      if(x % integer === 0){
        result.push(x)
      }
    }
    return result
  }
  