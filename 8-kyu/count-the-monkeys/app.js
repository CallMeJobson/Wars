function monkeyCount(n) {
    // your code here
      if(n === 0){
        return []
      }
      let array = Array.of(n)
      for(let i = 0; i < n; i++){
        array[i] = i +1
      }
      return array
    }