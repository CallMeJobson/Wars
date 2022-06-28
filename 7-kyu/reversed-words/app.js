function reverseWords(str) {
    // Go for it
    let result = ""
   result = str.split(" ")
     .map( word => {
      return word.split("").reverse().join("")
    })
     .join(" ")
    
    return result
  }