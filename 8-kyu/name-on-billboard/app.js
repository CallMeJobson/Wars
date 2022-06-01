function billboard(name, price = 30){
    let sum = 0;
    for(let letter in name){
      sum += price
    }
    return sum
  } 
  //The goal was to not use the * operator. 