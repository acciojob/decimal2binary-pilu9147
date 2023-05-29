function threeSum(arr, target) {
// write your code here
	let ans = "";
	while(arr > 0) {
		let rem = parseInt(arr%2);
		ans.concat(rem.toString());
		arr = parseInt(arr/2)
	}
	ans.reverse()
	return ans;
  
}

module.exports = threeSum;
