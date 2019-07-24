function rot13(str) { // LBH QVQ VG!
  const CIPHER = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M",
    " ": " ",
    "!": "!",
    "?": "?",
    ".": "."
  }

  let decodedString = "";

  for (let i = 0; i < str.length; i++){
    // console.log(CIPHER[str[i]]);
    decodedString += CIPHER[str[i]];
  }

  // console.log(decodedString);
  return decodedString;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");