function findShort(s){
    let words = s.split(" ")
    let length = 10000;
    words.forEach(element => {
      if( length > element.length){
        length = element.length
      }
    })
    return length
  }