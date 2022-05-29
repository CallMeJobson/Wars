function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = 0;
    if(classPoints.length === 0){
      return true
    }
    classPoints.forEach(x => {
      average += x;
    })
    average = average / classPoints.length
    return yourPoints > average;
  }
  