describe("countBy", function() {
  it("will count to the input number by one.", function() {
    var count = 5;
    var by = 1;
    expect(countBy(count, by)).to.eql([1, 2, 3, 4, 5]);
  });

  it("will count to the input number by 5", function() {
    var count = 30;
    var by = 5;
    expect(countBy(count, by)).to.eql([5, 10, 15, 20, 25, 30]);
  })
});
