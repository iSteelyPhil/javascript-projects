/* function descendingOrder(n){
    return Number(n.toString().split('').sort(function(a,b){
        return b - a
    }).join(''))
}
 */

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
  

console.log(descendingOrder(1234));


/* return parseInt(n.toString().split('').sort((a, b) => b - a).join('')); */