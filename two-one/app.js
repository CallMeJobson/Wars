function longest(s1, s2) {
    // your code
    let letters = []
    
    for(let i = 0; i < s1.length; i++){
      if(letters.includes(s1[i]) === false){
        letters.push(s1[i])
      }
    }
    
     for(let i = 0; i < s2.length; i++){
      if(letters.includes(s2[i]) === false){
        letters.push(s2[i])
      }
    }
    
    letters.sort()
    return letters.join("")
  }