var romanNumerals = function(number) {
  var roman = "";
  var numeralSets = [["X", "IX", "V", "IV"], ["C", "XC", "L", "XL"], ["M", "CM", "D", "CD"]];

  for(var setIndex = 2; setIndex >= 0; setIndex--) {
    var powTen = Math.pow(10, setIndex);
    while(number >= 9 * powTen) {
      if(number >= 10 * powTen) {
        roman = roman.concat(numeralSets[setIndex][0]);
        number -= 10 * powTen;
      } else if(number >= 9 * powTen) {
        roman = roman.concat(numeralSets[setIndex][1]);
        number -= 9 * powTen;
      }
    }
    if(number >= 5 * powTen) {
      roman = roman.concat(numeralSets[setIndex][2]);
      number -= 5 * powTen;
    } else if(number >= 4 * powTen) {
      roman = roman.concat(numeralSets[setIndex][3]);
      number -= 4 * powTen;
    }
  }

  for(var i = 0; i < number; i++){
    roman = roman.concat("I");
  }
  return roman;
}
