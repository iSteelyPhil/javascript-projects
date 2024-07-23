/* function filter_list(l) {
    // Return a new array with the strings filtered out
    result =[]
   
    for(i = 0;i<l.length;i++){
      if(typeof l[i] === 'number'){
        result.push(l[i])
      }
    }
    return result
  } */

    

function filter_list(l){
    return l.filter(function(a){
        return Number.isInteger(a)
    })
}
  console.log(filter_list([1,2,'a','b',3,4]))