function isPalindrome(string) {
  // if (string.split("").reverse().join("") == string) {
  //   return true;
  // } else {
  //   return false;
  // }
  return string.split("").reverse().join("") == string ? true : false;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
