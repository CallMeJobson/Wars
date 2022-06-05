function arrayPlusArray(arr1, arr2) {
    let result =  arr1.concat(arr2)
    let sum = 0;
     result.map(item => {
       return sum += item
     })
     return sum; //something went wrong
   }