const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let arrnew=[];
    if (!(Array.isArray(arr))) throw new Error();
    if(arr.length===0) return [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-prev') {
            if (arr[i-1]=== undefined) continue;
            if (arr[i - 2] === '--discard-next')continue;
            arrnew.push(arr[i-1]);
        }

        else if (arr[i] === '--double-next') {
            if (arr[i+1]=== undefined) continue;
            arrnew.push(arr[i+1]);
        }

        else if (arr[i] === '--discard-next') {
            i++;
        }

        else if (arr[i] === '--discard-prev') {
            if (!arr[0]) continue;
            if (arr[i - 2] === '--discard-next') continue;
            arrnew.pop();
        }
        else if (arr[i] !== '--discard-prev'|| arr[i] !== '--discard-next'|| arr[i] !== '--double-next' || arr[i] !== '--double-prev')
            arrnew.push (arr[i]);

    }

    return arrnew;
}
