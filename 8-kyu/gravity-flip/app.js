const flip=(d, a)=>{
    //TODO
    if(d === "R"){
      return a.sort((a,b) => {
        return a - b
      })
    }
    
    return a.sort( (a,b) => {
      return b - a
    })
  }