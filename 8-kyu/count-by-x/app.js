function countBy(x, n) {
    let z = [];
    for(let start = x; start <= n * x; start += x){
      z.push(start)
    }
  
    return z;
  }