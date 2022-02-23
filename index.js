// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let pickupLocation = someValue;
    let headQuarters = 42;
    if (pickupLocation < headQuarters){
        return headQuarters - pickupLocation;
    }else{
        return pickupLocation - headQuarters;
    }
    //returns the number of blocks given a value
  }

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let distanceFromHq = someValue - 42;
    let distanceInBlocks = distanceFromHq * 264;
    let startLessThan = 42 - someValue;
    let distanceInBlocksLessThan = startLessThan * 264;
    if(someValue > 42){
        return distanceInBlocks;
    }else{
        return distanceInBlocksLessThan;
    }
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let totalDistance = destination - start;
    let totalinFt = totalDistance * 264;
    let smallerDistance = start - destination;
    let smallerTotal = smallerDistance * 264;
    if(start < destination){
        return totalinFt;
    }else{
        return smallerTotal;
    }
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let inBetweenDistance = (distanceTravelledInFeet(start, destination));

if (inBetweenDistance < 400){
    return 0;
}else if (inBetweenDistance  > 400 && inBetweenDistance  < 2000){
    return (inBetweenDistance - 400) *.02;
}else if (inBetweenDistance  > 2000 && inBetweenDistance  < 2500){
    return 25;
}else{
    return 'cannot travel that far';
}
} 

  
  