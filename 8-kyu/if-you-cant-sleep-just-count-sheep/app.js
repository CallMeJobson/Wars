var countSheep = function (num){
    //your code here
    if(num === 0){
      return ""
    }
    let story = ""
    for(let x = 1; x <= num ; x++){
      story += `${x} sheep...`
    }
    return story.trim()
  }