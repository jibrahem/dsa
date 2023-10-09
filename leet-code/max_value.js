const maxValue = (nums) => {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        if(num > max){
            max = num
        }
    }
    console.log('max', max)
    return max
};

maxValue([4, 7, 2, 8, 10, 9])
maxValue([10, 5, 40, 40.3])
maxValue([-5, -2, -1, -11])
