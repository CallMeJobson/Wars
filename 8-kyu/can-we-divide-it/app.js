function isDivideBy(number, a, b) {
    // good luck
    let aCheck = number % a === 0;
    let bCheck = number % b === 0;
    if(aCheck && bCheck){
      return true
    }
    return false
  }