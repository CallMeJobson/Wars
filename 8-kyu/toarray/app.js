function digitize(n) {
    //code here
    let str = String(n)
    return str.split("").reverse().map(x => +x)
  }