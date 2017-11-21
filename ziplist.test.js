/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('ZipList', function () {
  const testNums = [1, 2, 3];
  const testNums2 = [4, 5, 6];
  describe('zipList()', function () {
    it('should return an array with 6 elements', function () {
      chai.expect(zipList(testNums, testNums2)).to.have.length(6);
    });
    it('should return [1,2,3,4,5,6]', function () {
      chai.expect(zipList(testNums, testNums2)).to.deep.equal([1, 4, 2, 5, 3, 6]);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should deep equal the 6 element array', function () {
      chai.expect(zipListTheSimpleWay(testNums, testNums2)).to.have.length(6);
    });
    it('should deep equal the 6 element array', function () {
      chai.expect(zipList(testNums, testNums2)).to.deep.equal([1, 4, 2, 5, 3, 6]);
    });
  });
});
