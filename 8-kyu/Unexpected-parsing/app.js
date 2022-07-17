function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    var status = {
      "status": msg
    }
    return status
    
  }