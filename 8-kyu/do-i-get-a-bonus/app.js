function bonusTime(salary, bonus) {
    // your code here
      let newSalary = 1
      if(bonus){
        newSalary = salary * 10
      }
      else{
        newSalary = salary
        
      }
      return `£${newSalary}`
    }