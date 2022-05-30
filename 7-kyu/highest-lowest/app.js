function highAndLow(numbers){
    // ...
    let nums = numbers.split(" ")
    nums = nums.sort((a,b) => {
      return a - b;
    })
    
    return `${nums[nums.length -1]} ${nums[0]}`
  }