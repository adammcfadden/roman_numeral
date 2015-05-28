describe("romanNumerals", function() {

  it("will convert numbers from 1-3 to roman numerals", function() {
    expect(romanNumerals(1)).to.equal("I");
    expect(romanNumerals(2)).to.equal("II");
    expect(romanNumerals(3)).to.equal("III");
  });

  it("will convert numbers from 4-8 to roman numerals", function() {
    expect(romanNumerals(4)).to.equal("IV");
    expect(romanNumerals(5)).to.equal("V");
    expect(romanNumerals(6)).to.equal("VI");
    expect(romanNumerals(7)).to.equal("VII");
    expect(romanNumerals(8)).to.equal("VIII");
  });

  it("will convert numbers from 9-18 to roman numerals", function() {
    expect(romanNumerals(9)).to.equal("IX");
    expect(romanNumerals(10)).to.equal("X");
    expect(romanNumerals(11)).to.equal("XI");
    expect(romanNumerals(12)).to.equal("XII");
    expect(romanNumerals(13)).to.equal("XIII");
    expect(romanNumerals(14)).to.equal("XIV");
    expect(romanNumerals(15)).to.equal("XV");
    expect(romanNumerals(16)).to.equal("XVI");
    expect(romanNumerals(17)).to.equal("XVII");
    expect(romanNumerals(18)).to.equal("XVIII");
  });

  it("will convert numbers from 19-39 to roman numerals", function() {
    expect(romanNumerals(19)).to.equal("XIX");
    expect(romanNumerals(20)).to.equal("XX");
    expect(romanNumerals(21)).to.equal("XXI");
    expect(romanNumerals(22)).to.equal("XXII");
    expect(romanNumerals(23)).to.equal("XXIII");
    expect(romanNumerals(24)).to.equal("XXIV");
    expect(romanNumerals(25)).to.equal("XXV");
    expect(romanNumerals(29)).to.equal("XXIX");
    expect(romanNumerals(34)).to.equal("XXXIV");
    expect(romanNumerals(39)).to.equal("XXXIX");
  });

  it("will convert numbers from 40-89 to roman numerals", function() {
    expect(romanNumerals(40)).to.equal("XL");
    expect(romanNumerals(54)).to.equal("LIV");
    expect(romanNumerals(67)).to.equal("LXVII");
    expect(romanNumerals(75)).to.equal("LXXV");
    expect(romanNumerals(89)).to.equal("LXXXIX");
  });

  it("will convert numbers from 90-399 to roman numerals", function() {
    expect(romanNumerals(90)).to.equal("XC");
    expect(romanNumerals(150)).to.equal("CL");
    expect(romanNumerals(234)).to.equal("CCXXXIV");
    expect(romanNumerals(387)).to.equal("CCCLXXXVII");
    expect(romanNumerals(399)).to.equal("CCCXCIX");
  });

  it("will convert numbers from 400-899 to roman numerals", function() {
    expect(romanNumerals(400)).to.equal("CD");
    expect(romanNumerals(544)).to.equal("DXLIV");
    expect(romanNumerals(676)).to.equal("DCLXXVI");
    expect(romanNumerals(752)).to.equal("DCCLII");
    expect(romanNumerals(899)).to.equal("DCCCXCIX");
  });

});
