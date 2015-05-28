describe("romanNumerals", function() {
  it("will convert numbers from 1 to 3 to roman numerals", function() {
    expect(romanNumerals(1)).to.equal("I");
    expect(romanNumerals(2)).to.equal("II");
    expect(romanNumerals(3)).to.equal("III");
  });
  it("will convert numbers from 1-8 to roman numerals", function() {
    expect(romanNumerals(4)).to.equal("IV");
    expect(romanNumerals(5)).to.equal("V");
    expect(romanNumerals(6)).to.equal("VI");
    expect(romanNumerals(7)).to.equal("VII");
    expect(romanNumerals(8)).to.equal("VIII");
  });
  it("will convert numbers from 9-13 to roman numerals", function() {
    expect(romanNumerals(9)).to.equal("IX");
    expect(romanNumerals(10)).to.equal("X");
    expect(romanNumerals(11)).to.equal("XI");
    expect(romanNumerals(12)).to.equal("XII");
    expect(romanNumerals(13)).to.equal("XIII");
  });
});
