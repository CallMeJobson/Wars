function descendingOrder(n){
    //...
    let stringNum = n.toString();
     stringArray = stringNum.split("").reverse()
    stringArray = stringArray.map((x) =>{
      return parseInt(x)
    })
    
    stringArray.sort((a,b) => {
      return b - a
    })
    let b = +stringArray.join("")
    return b;
    
  }