function bmi(weight, height) {
 
    const bmiNumber = weight/(height**2)
    if(bmiNumber <= 18.5){
      return "Underweight"
    }
    if(bmiNumber <= 25){
      return "Normal"
    }
    if(bmiNumber <= 30.0){
      return "Overweight"
    }
    if(bmiNumber > 30)
    return "Obese";
  }