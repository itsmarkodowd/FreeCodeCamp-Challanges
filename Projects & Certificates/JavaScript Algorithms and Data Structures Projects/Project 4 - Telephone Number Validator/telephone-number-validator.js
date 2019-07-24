function telephoneCheck(str) {
  let regex1 = str.match(/^\d{3}-\d{3}-\d{4}/); //555-555-5555
  let regex2 = str.match(/^\(\d{3}\)\d{3}-\d{4}/); //(555)555-5555
  let regex3 = str.match(/^\(\d{3}\)\s\d{3}-\d{4}/); //(555) 555-5555
  let regex4 = str.match(/^\d{3}\s\d{3}\s\d{4}/); //555 555 5555
  let regex5 = str.match(/^(1|5)\d{9}/); //5555555555
  let regex6 = str.match(/^1\s\d{3}\s\d{3}\s\d{4}/); //1 555 555 5555
  let regex7 = str.match(/^(1|5)\d{10}/); //55555555555
  let regex8 = str.match(/^1\s\d{3}-\d{3}-\d{4}/); //1 555-555-5555
  let regex9 = str.match(/^1\s\(\d{3}\)\s\d{3}-\d{4}/); //1 (555) 555-5555
  let regex10 = str.match(/^1\(\d{3}\)\d{3}-\d{4}/); //1(555)555-5555

  console.log("regex 1: " + regex1);
  console.log("regex 2: " + regex2);
  console.log("regex 3: " + regex3);
  console.log("regex 4: " + regex4);
  console.log("regex 5: " + regex5);
  console.log("regex 6: " + regex6);
  console.log("regex 7: " + regex7);
  console.log("regex 8: " + regex8);
  console.log("regex 9: " + regex9);
  console.log("regex 10: " + regex10);

  if (regex1 == null && 
      regex2 == null && 
      regex3 == null && 
      regex4 == null && 
      regex5 == null && 
      regex6 == null &&
      regex7 == null &&
      regex8 == null &&
      regex9 == null &&
      regex10 == null
    ){
      return false;
  } else {
      return true;
  }
}

telephoneCheck("1(555)555-5555");