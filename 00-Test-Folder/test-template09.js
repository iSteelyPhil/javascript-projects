let array1 = [ 5, 10, 2, 42 ]
let array2 = [ -2, 0, -10, -44, 5, 3, 0, 3 ]
let array3 = [ 200, 5, 4, 10, 8, 5, -3.3, 4.4, 0 ]

function findMinValue(arr){

    let minValue = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i]; 
      }
    }
  
    return minValue;
  }

  function sortValues(arrSort) {
    let newArray = [];
    let arrCopy = [...arrSort]; 
  
    while (arrCopy.length > 0) {
      let minValue = findMinValue(arrCopy);
      newArray.push(minValue);
      arrCopy.splice(arrCopy.indexOf(minValue), 1); 
    }
  
    return newArray;
  }


  console.log(sortValues(array1));