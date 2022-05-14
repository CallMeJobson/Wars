function invert(array) {
    var array2 = [...array]
    
    var stuff = array2.map(x =>{
      if(x == 0){
        return -0
      }
      if(x > 0){
        return -Math.abs(x) 
      }else{
        return Math.abs(x)
      }
    })
     return stuff
  }