function fakeBin(x){
    let str = "";
    for(let element of x){
      if(parseInt(element) < 5){
        str += '0'
      }else if(parseInt(element) >= 5){
        str += '1'
      }
    }
    return str
  }