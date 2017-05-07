/*

description: 给出一个num, 找出两个数的和为target, 并返回两个数对应索引的数组
examples: 
  nums = [2, 7, 11, 15], target = 9
  nums[0] + nums[1] = target
  return [0, 1]
*/


function findSumTargetIndex(nums, target) {
	
	if (!Array.isArray(nums)) {
		throw new Error('nums must be a array');
	}

	var numMap = {};

	for (let i = 0; i < nums.length; i++) {
		let otherNum = target - nums[i];
		if (numMap[otherNum]) {
			return [numMap[otherNum] - 1, i];
		}
    
    numMap[nums[i]] = i + 1;
	}

}


console.log(findSumTargetIndex([1, 3, 5, 2, 7, 11, 15], 9))