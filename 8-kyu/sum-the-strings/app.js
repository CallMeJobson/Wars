function sumStr(a,b) {
    let sum = getNumberValue(a) + getNumberValue(b)
    return String(sum) 
  }
    
  function getNumberValue(str){
    if(str === ""){
      return 0
    }
    else{
      return parseInt(str)
    }
  }