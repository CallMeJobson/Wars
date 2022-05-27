function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let result = ""
    for(let letter of dna){
      if(letter === "T"){
        result += "U"
      }
      else{
        result += letter
      }
      
    }
    return result;
  }