function sayHello( name, city, state ) {
    let names = ""
    //name = name.split(",")
    name.forEach(person =>{
       names += ` ${person}`
    })
     
    
  
    names = names.trim()
    let newNames = names.replace(',',"")
    
    return`Hello, ${newNames}! Welcome to ${city}, ${state}!`
  }