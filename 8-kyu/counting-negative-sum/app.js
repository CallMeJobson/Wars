function countPositivesSumNegatives(input) {
    let numberPos = 0
    let negativeSum = 0
    if(input == null || input.length == 0 ){
      return []
    }
    for(let i = 0; i < input.length; i++){
      if(input[i] < 0 ){
        negativeSum += input[i]
      }
      if(input[i] >= 1){
        numberPos += 1
      }
    }
      return [numberPos, negativeSum];
  }