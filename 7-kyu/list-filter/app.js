function filter_list(l) {
    // Return a new array with the strings filtered out
    
    const newArray = l.filter( item => typeof item === 'number')
    return newArray
  }