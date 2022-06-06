function doubleChar(str) {
    // Your code here
    let resultString = "";
    let array = str.split("");
    array.forEach(word => {
      resultString += word.repeat(2)
      
    })
    return resultString
  }
  