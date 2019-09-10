Test.describe('Sample tests', function() {
  Test.it('Should pass Sample tests', function() {
    Test.assertDeepEquals(array_diff([], [4, 5]), [], 'a was [], b was [4,5]');
    Test.assertDeepEquals(array_diff([3, 4], [3]), [4], 'a was [3,4], b was [3]');
    Test.assertDeepEquals(array_diff([1, 8, 2], []), [1, 8, 2], 'a was [1,8,2], b was []');
  });
});
