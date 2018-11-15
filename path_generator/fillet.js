function rotatePoint(point, angle) {
    var x = point.x * Math.cos(angle) + point.y * Math.sin(angle);
    var y = -point.x * Math.sin(angle) + point.y * Math.cos(angle);
    return {x: x, y: y};
}

function getXYAngle(p0, p1) {
    var dx = p1.x - p0.x;
    var dy = p1.y - p0.y;
    var angle;
    if (dx == 0) {
        if (dy < 0) {
            angle = -Math.PI / 2;
        } else {
            angle = Math.PI / 2;
        }
    } else {
        angle = Math.atan(dy / dx);
    }
    if (dx < 0) {
        angle = angle + Math.PI;
    }
    if (angle < 0) {
        angle = angle + 2 * Math.PI;
    }
    return angle;
}

function getAngleBetween(angle1, angle2) {
    var angle = (angle2 - angle1) / 2;
    if (angle < 0)
        angle = angle + Math.PI;
    return angle;
}

function getPointByAngle(angle, middlePt, isRight, r, a, b) {
    var Xtmp;
    if (isRight) {
        Xtmp = r / Math.sin(a) + r * Math.cos(angle);

    } else {
        Xtmp = -r / Math.sin(a) + r * Math.cos(angle);
    }
    var Ytmp = r * Math.sin(angle);
    var newPt = rotatePoint({x: Xtmp, y: Ytmp}, -a - b);
    return {x: newPt.x + middlePt.x, y: newPt.y + middlePt.y};
}

function getRotationPoints(startPt, middlePt, endPt, r, step) {
    var pi = Math.PI;
    step /= 180 / pi;
    var b = getXYAngle(middlePt, startPt);
    var c = getXYAngle(middlePt, endPt);
    var a = getAngleBetween(b, c);
    if (a === parameters.tolerance )
        return [middlePt];
    var isRight = a < pi / 2;
    var startAngle, endAngle;
    if (isRight) {
        endAngle = pi / 2 + a;
        startAngle = 3 * pi / 2 - a;
//        step *= -1;
    } else {
        startAngle = pi / 2 - a;
        endAngle = -pi / 2 + a;
    }
    var rotationPoints = [];
    if (isRight) {
        for (var angle = startAngle; angle > endAngle; angle -= step) {
            if (getDist(startPt,endAngle)> parameters.weightData) rotationPoints.push(getPointByAngle(angle, middlePt, isRight, r, a, b));
        }
    } else {
        for (var angle = startAngle; angle < endAngle; angle += step) {
            rotationPoints.push(getPointByAngle(angle, middlePt, isRight, r, a, b));
        }
    }
    rotationPoints.push(getPointByAngle(endAngle, middlePt, isRight, r, a, b));
    return rotationPoints;
   /* var newPath = parameters.pathPoints.slice(0,parameters.pathPoints.length);

    var change = parameters.tolerance;
    while (change >= parameters.tolerance) {
        change = 0.0;
        for (var i = 1; i < parameters.pathPoints.length - 1; i++)
            for (var j = 0; j < parameters.pathPoints[i].length; j++) {
                var aux = newPath[i][j];
                newPath[i][j] += parameters.weightData * (parameters.basePoints[i][j] - newPath[i][j]) + parameters.weightSmooth * (newPath[i - 1][j] + newPath[i + 1][j] - (2.0 * newPath[i][j]));
                change += Math.abs(aux - newPath[i][j]);
            }
    }return newPath;
}*/
/*  var pi = Math.PI;
    step /= 180 / pi;
    var b = parameters.weightSmooth;
    var c = parameters.tolerance;
    var a = parameters.weightData;
    if (a === c / 2)
        return [middlePt];
    var isRight = a < pi / 2;
    var startAngle, endAngle;
    if (isRight) {
        endAngle = pi / 2 - a;
        startAngle = 3 * pi / 2 + a;
//        step *= -1;
    } else {
        startAngle = pi/ 2 + a;
        endAngle = pi/ 2 - a;
    }
    var rotationPoints = [];
    if (isRight) {
        for (var angle = startAngle; angle > endAngle; angle -= step) {
            rotationPoints.push(getPointByAngle(angle, middlePt, isRight, r, a, b));
        }
    } else {
        for (var angle = startAngle; angle < endAngle; angle += step) {
            rotationPoints.push(getPointByAngle(angle, middlePt, isRight, r, a, b));
        }
    }
    rotationPoints.push(getPointByAngle(endAngle, middlePt, isRight, r, a, b));
    return rotationPoints;
   /* var newPath = paramet*/
function smoother() {

    //copy array



}}

