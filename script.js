function mincost(arr) {
  let result = 0;
  arr.sort((a, b) => a - b); // sort array in ascending order at the beginning
  while(arr.length > 1) {
    let sum = arr[0] + arr[1];
    result += sum;
    arr.splice(0, 2); // remove the first two elements
    arr.push(sum); // add the sum to the array
    arr.sort((a, b) => a - b); // sort array again after adding new element
  }
  return result;
}

module.exports=mincost;
