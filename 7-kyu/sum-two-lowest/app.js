function sumTwoSmallestNumbers(numbers) {  
    //Code here
    numbers = numbers.sort( (a,b) => {
      return a - b
    })
    
    return numbers[0] + numbers[1]
  }