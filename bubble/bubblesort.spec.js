describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array of size 2', function() {
    expect(bubbleSort([5, 4])).toEqual([4, 5]);
  });
  it('handles an array of size n', function() {
    expect(bubbleSort([2, 4, 7, 3, 1, 5])).toEqual([1, 2, 3, 4, 5, 7]);
    expect(bubbleSort([2, 4, 7, 3, 1, 5, 6, 10, 9, 8])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
  });
});
