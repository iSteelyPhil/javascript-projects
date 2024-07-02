//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
let nums4 = [5, 10, 2, 42];
let nums5 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums6 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
//Sort each array in ascending order.
console.log(sortValues(nums1));
console.log(sortValues(nums2));
console.log(sortValues(nums3));

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

  function sortValues(arr) {
    let sortedArray = [];
  
    while (arr.length > 0) {
      let minValue = findMinValue(arr);
      sortedArray.push(minValue);
      arr.splice(arr.indexOf(minValue), 1); 
    }
  
    return sortedArray;
  }


//Sort each array in descending order.
function findMaxValue(arr){
    let max = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }

  function sortMaxValues(arr) {
    let sortedArray = [];
  
    while (arr.length > 0) {
      let maxValue = findMaxValue(arr);
      sortedArray.push(maxValue);
      arr.splice(arr.indexOf(maxValue), 1); 
    }
  
    return sortedArray;
  }
  console.log(sortMaxValues(nums4));
  console.log(sortMaxValues(nums5));
  console.log(sortMaxValues(nums6));