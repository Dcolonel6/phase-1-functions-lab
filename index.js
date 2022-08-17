// Code your solution in this file!
function distanceFromHqInBlocks(passengerLocation){
    return Math.abs(passengerLocation - 42) ;
}
function distanceFromHqInFeet(numberBlocks){
    return distanceFromHqInBlocks(numberBlocks) * 264;
}
function distanceTravelledInFeet(startBlock, endBlock){
    const numBlocks  = endBlock - startBlock;
    return Math.abs(264 * numBlocks);
}

function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare = 0;
    
        if (distanceInFeet <= 400){
            return 0            
        }else if(distanceInFeet > 400 && distanceInFeet <= 2000){
            distanceInFeet = distanceInFeet - 400;
            fare += (distanceInFeet * 2) / 100;
        } else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
            fare = fare + 25;
        }else if(distanceInFeet > 2500){
            return "cannot travel that far";
        }
    return fare;
}
