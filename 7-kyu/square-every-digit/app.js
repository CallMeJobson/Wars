function squareDigits(num){
    if(num === 0){
      return 0
    }
    
    var stringNum = num + ""
    var array = stringNum.split('')
    var result = ""
    array.forEach(x => {
      result += (parseInt(x) ** 2) + "" 
       
    })
    
    return +result;
  }