function pigIt(str){
    //Code here
    let stringArray = str.split(" ");
    stringArray = stringArray.map(word => {
      if(word !== "!"  && word !== "?"){
        let result = word.slice(1)
        return`${result}${word[0]}ay`
        
      }
      return word 
      
      
    })
    return stringArray.join(" ");
  }