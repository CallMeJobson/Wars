function abbrevName(name){

    // code away
  var names = name.split(' ')
  var output = names[0][0].toUpperCase() + "." + names[1][0].toUpperCase()
  return output
}