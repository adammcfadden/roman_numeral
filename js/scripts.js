var romanNumerals = function(number) {
  var roman = "";

  if(number === 9) {
    roman = roman.concat("IX");
    number -= 9;    
  } else if(number >= 10) {
    roman = roman.concat("X");
    number -= 10;
  }
  if(number === 4) {
    roman = roman.concat("IV");
    number -= 4;
  } else if(number >= 5) {
    roman = roman.concat("V");
    number -= 5;
  }
  for(var i = 0; i < number; i++){
    roman = roman.concat("I");
  }
  return roman;
}







// var breakPoint = 0;
// var numeralType = "I";
// for(var i = 0; i < number; i++){
//   roman = roman.concat("I");
//   if (roman.includes("III")) {
//     breakPoint = 5;
//     numeralType = "V";
//   }
//   if (i === breakPoint) {
//     roman = "";
//     roman = roman.concat(numeralType);
//   }
// }
