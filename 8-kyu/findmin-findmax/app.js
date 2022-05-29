var min = function(list){
    let sorted = list.sort((a, b) => {
      return a-b
    })
    return sorted[0];
}

var max = function(list){
    
    let sorted = list.sort((a, b) => {
      return b-a
    })
    return sorted[0];
}