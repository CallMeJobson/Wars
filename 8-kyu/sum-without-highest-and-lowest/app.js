function sumArray(array) {
    if(array === null || array === undefined ) {
      return 0
    }
    if(array.length <= 2){
      return 0
    }
    array.sort((a,b) =>{
      return a - b
    })
    
    let min = array[0]
    let max = array[array.length-1]
    console.log(array)
  
  
    let total = 0
    for(let x = 0; x < array.length -1; x++){
      if(x != 0 ){
          total += array[x]
         }
     
    }
    
    return total
  }