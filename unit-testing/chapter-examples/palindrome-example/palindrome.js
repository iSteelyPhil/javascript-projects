function reverse(str) {
   return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
   return reverse(str) === str;
 }
/*  isPalindrome("aabbaa"); */
 module.exports = isPalindrome;