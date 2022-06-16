function points(games) {
    // your code here
    let points = 0
    for(let x = 0; x < games.length; x++){
      let result = games[x].split(":")
      if(result[0] > result[1]){
        points += 3
      }
      else if(result[0] == result[1]){
        points += 1
      }
     
    
    }
    
    return points
    
  }