function mergeArrays(arr1, arr2) {
  
    let array = arr1.concat(arr2)
    let sorted = [...new Set(array)]
    
    
    sorted.sort((a,b) =>{
      return a-b
    })
    return sorted
    }