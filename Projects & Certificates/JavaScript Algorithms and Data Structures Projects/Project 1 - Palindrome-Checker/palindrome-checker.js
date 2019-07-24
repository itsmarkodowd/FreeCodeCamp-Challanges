function palindrome(str) {
  let regexCheck = str.match(/[a-zA-Z0-9]/g);
  let forwardArray = [];
  let reverseArray = [];

  // console.log("regex: " + regexCheck);

  regexCheck.forEach((item) => forwardArray.push(item))
  regexCheck.forEach((item) => reverseArray.unshift(item))

  // console.log("forwardArray: " + forwardArray);
  // console.log("reverseArray: " + reverseArray);

  return (forwardArray.join("").toLowerCase() == reverseArray.join("").toLowerCase())
}



palindrome("A man, a plan, a canal. Panama");