const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth( arr ) {
    let count=1;
    let depth=1;
    if (arr.length === 0) return 1;
      for (let i=0; i<arr.length; i++){

        if (Array.isArray(arr[i])) {
          count += this.calculateDepth(arr[i]);
        }
        if (count > depth) {
            depth=count;
          }  count=1;
  }
return depth;
}
};
