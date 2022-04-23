function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = 0
    arrayOfSheep.forEach(element => {
      if(element){
        count+=1
      }
    })
    return count
  }