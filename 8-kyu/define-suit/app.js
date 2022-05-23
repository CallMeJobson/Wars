function defineSuit(card) {
    // good luck
    let returnSuit;
    for(const suit of card){
  //     if(suit === "♣")
  //       return "clubs"
      switch(suit){
          case '♣':
            returnSuit = 'clubs'
            break;
          
          case '♦':
            returnSuit = 'diamonds'
            break;
          
          case '♥':
            returnSuit = 'hearts'
            break;
          
          case '♠':
            returnSuit =  'spades'
            break;
      }
      
    }
    return returnSuit