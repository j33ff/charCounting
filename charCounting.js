function countLetters(inputString){
  var outputObject = {};

  for (i = 0; i < inputString.length; i++) {

    var char = inputString[i];
    if(char != ' '){
      if(outputObject.hasOwnProperty(char)){
        outputObject[char] += 1;
      } else {
          outputObject[char] = 1;
      }
    }
  }
  return outputObject;
}

console.log(countLetters(process.argv[2]));