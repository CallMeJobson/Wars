// return masked string
function maskify(cc) {
  
    if(cc.length === 1) {
      return cc
    }else if(cc === "") {
        return ""
      }
  let start = cc.length - 4
  let result = cc.substr(start, cc.lenth-1)
  let mask = ""
  console.log(start)
  for(let x = 0; x < cc.length; x++) {
    
   if(x >= start){
     mask += cc[x]
     continue
   }
  mask += "#"
    
    
  }
    return mask
  }
  