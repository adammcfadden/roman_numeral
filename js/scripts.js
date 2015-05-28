var romanNumerals = function(number) {
  var roman = "";

  while(number >= 900) {
    if(number >= 1000) {
      roman = roman.concat("M");
      number -= 1000;
    } else if(number >= 900) {
      roman = roman.concat("CM");
      number -= 900;
    }
  }

  if(number >= 500) {
    roman = roman.concat("D");
    number -= 500;
  } else if(number >= 400) {
    roman = roman.concat("CD");
    number -= 400;
  }

  while(number >= 90) {
    if(number >= 100) {
      roman = roman.concat("C");
      number -= 100;
    } else if(number >= 90) {
      roman = roman.concat("XC");
      number -= 90;
    }
  }

  if(number >= 50) {
    roman = roman.concat("L");
    number -= 50;
  } else if(number >= 40) {
    roman = roman.concat("XL");
    number -= 40;
  }

  while(number >= 9) {
    if(number >= 10) {
      roman = roman.concat("X");
      number -= 10;
    } else if(number === 9) {
      roman = roman.concat("IX");
      number -= 9;
    }
  }

  if(number >= 5) {
    roman = roman.concat("V");
    number -= 5;
  } else if(number === 4) {
    roman = roman.concat("IV");
    number -= 4;
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
