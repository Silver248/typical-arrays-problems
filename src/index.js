
exports.min = function min (array) {
    let mini=0;
    if (!array) {
        return 0;
    } else {
        for (let i=0; i<array.length; i++){
            if (array[i]<mini) {
                mini=array[i];
            }
        }
        return mini;
    }   
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
