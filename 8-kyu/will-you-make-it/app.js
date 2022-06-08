const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    //distanceToPump
    const distanceCanTravel = mpg * fuelLeft
    return distanceToPump <= distanceCanTravel
  };