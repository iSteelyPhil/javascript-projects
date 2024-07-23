function isIsogram(str){
  //...
let charObj = {}
 for(i=0;i<str.length;i++){
   let char = str[i]
    if(charObj[char]){
      return false;
    }else{
      charObj[char] = true;
    }
 }
  return true;
}
console.log(isIsogram("hello"))