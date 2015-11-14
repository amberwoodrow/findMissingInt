// find missing number in arr of numbers 1-10

function findMissingInt(arr) {

  if (arr.length !== 9) {
    return "array is not 9 numbers long";
  }

  var sortedArr = arr.slice(0).sort(function(a,b) {return a-b;});
  // console.log(sortedArr)

  for (var i=0; i<sortedArr.length; i++){
    if (i !== (sortedArr[i]-1)) {
      return i+1;
    }
  }
}

console.log(findMissingInt([1,2,3,5,6,7,8,9,10]));
console.log(findMissingInt([10,5,1,8,6,7,9,3,2]));
