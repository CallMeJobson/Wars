function XO(str) {
    //code here
  let xCount = 0;
  let yCount = 0;
  for(const letter of str){
    const lower = letter.toLowerCase()
    console.log(lower)
    if(lower === "x"){
      xCount += 1;
      //console.log(xCount)
    }
    if(lower === "o"){
      yCount += 1;
    }
  }
  
  return yCount === xCount ;
}