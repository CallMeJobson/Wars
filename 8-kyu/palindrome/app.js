function isPalindrome(x) {
    // your code here
    let lower = x.toLowerCase()
    let copy = lower.split("").reverse().join("")
   
    return lower === copy
  }