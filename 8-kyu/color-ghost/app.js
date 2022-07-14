var Ghost = function() {
    // your code goes here
    const colors = ["white", "yellow", "purple", "red"]
    
    const _ghostColor =  colors[Math.floor(Math.random() * colors.length)]
    this.color = _ghostColor
  };