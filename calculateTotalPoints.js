const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  
  if(distance == undefined || hillSize == undefined || kPoint == undefined || styleNotes == undefined || windFactor == undefined || gateFactor == undefined) {
    return 'Some values are missing';
  } else {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    return distancePoints + stylePoints + windFactor + gateFactor;
  }
}

module.exports = calculateTotalPoints;