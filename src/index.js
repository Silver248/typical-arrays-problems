
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
    let maxi=0;
    if (!array) {
        return 0;
    } else {
        for (let i=0; i<array.length; i++){
            if (array[i]>maxi) {
                maxi=array[i];
            }
        }
        return maxi;
    }   
}

exports.avg = function avg (array) {
    if (!array||array.length==0) {
        return 0;
    } else {
        let aver=0;
        let sum=0;
        for (let i=0; i<array.length; i++){
            sum=sum+array[i];
        }
        aver=sum/array.length;
        return aver;
    }   
}
