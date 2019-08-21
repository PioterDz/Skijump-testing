// possible hillSize: 'mamut', 'normal', 'big'

const calculateDistancePoints = (distance, hillSize, kPoint) => {

    if (distance > 300 || kPoint > 300) {
        return 'Invalid values';
    } else {

    let initVal;
    let points;

    const initPoints = distance - kPoint;

    countPoints = (init, countInt) => init * countInt;

    hillSize === 'mamut' ? initVal = 120 : initVal = 60;

    if (hillSize === 'normal') {
        points = countPoints(initPoints, 2);
    } else if (hillSize === 'big') {
        points = countPoints(initPoints, 1.8);
    } else if (hillSize === 'mamut') {
        points = countPoints(initPoints, 1.2);
    } else {
        return 'Type correct hill type in quotation marks: normal, big or mamut';
    }

    const result = initVal + points;
    return result;
    }
};

module.exports = calculateDistancePoints;