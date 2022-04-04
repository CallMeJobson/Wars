function getCount(str) {
    var vowelsCount = 0;
    
    // enter your code here
    for(let char of str){
      if(char === "a"){
        vowelsCount += 1;
      }
      if(char === "e"){
        vowelsCount += 1;
      }
      if(char === "i"){
        vowelsCount += 1;
      }
      if(char === "o"){
        vowelsCount += 1;
      }
      if(char === "u"){
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }