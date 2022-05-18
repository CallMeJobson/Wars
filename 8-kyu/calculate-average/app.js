function find_average(array) {
    // your code here
     let i = 0;
    if(array.length == 0){
      return 0;
    }else{
      array.forEach(x =>{
        i += x
      })
    }
    
    
    
    return i / array.length;
  }