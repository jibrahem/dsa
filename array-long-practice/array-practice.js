const findMinimum = arr => {
 let min = arr[0]
 for(let i = 0; i < arr.length; i++){
  min = Math.min(min, arr[i])
 }
 return min
};

const runningSum = arr => {

  // Your code here
};

const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
