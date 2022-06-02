function disemvowel(str) {
    let result = "";
    for(let letter of str){
      if(letter.toLowerCase() != 'a' && letter.toLowerCase() != 'e' && letter.toLowerCase() != 'i' && letter.toLowerCase() != 'o' && letter.toLowerCase() != 'u'){
        result += letter
      
      }
    }
    return result;
  }