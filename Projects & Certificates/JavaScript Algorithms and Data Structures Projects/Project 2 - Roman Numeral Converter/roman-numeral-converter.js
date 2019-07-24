function convertToRoman(num) {
  let numberArray = Array.from(num.toString()).map(Number);
  let singleDigit = numberArray[numberArray.length - 1];
  let tenDigit = numberArray[numberArray.length - 2];
  let hundredDigit = numberArray[numberArray.length - 3];
  let thousandDigit = numberArray[numberArray.length - 4];
  let combinedString = "";

  //Thousand Digits - 4000 Doesn't Exist
  switch (thousandDigit){
    case 1:
    case 2:
    case 3:
    combinedString += ("M".repeat(thousandDigit));
  }

  //Hundred Digits
  switch (hundredDigit){
    case 1:
    case 2:
    case 3:
      combinedString += ("C".repeat(hundredDigit));
      break;
    case 4:
      combinedString += "CD";
      break;
    case 5:
      combinedString += "D";
      break;
    case 6:
    case 7:
    case 8:
      combinedString += "D" + ("C".repeat(hundredDigit-5));
      break;
    case 9:
      combinedString += "CM";
  }

  //Ten Digits
  switch (tenDigit){
    case 1:
    case 2:
    case 3:
      combinedString += ("X".repeat(tenDigit));
      break;
    case 4:
      combinedString += "XL";
      break;
    case 5:
      combinedString += "L";
      break;
    case 6:
    case 7:
    case 8:
      combinedString += "L" + ("X".repeat(tenDigit-5));
      break;
    case 9:
      combinedString += "XC";
  }

  //Single Digits
  switch (singleDigit){
    case 1:
    case 2:
    case 3:
      combinedString += ("I".repeat(singleDigit));
      break;
    case 4:
      combinedString += "IV";
      break;
    case 5:
      combinedString += "V";
      break;
    case 6:
    case 7:
    case 8:
      combinedString += "V" + ("I".repeat(singleDigit-5));
      break;
    case 9:
      combinedString += "IX";
  }

  // console.log("combined: " + combinedString);
  return combinedString;
}

convertToRoman(6);