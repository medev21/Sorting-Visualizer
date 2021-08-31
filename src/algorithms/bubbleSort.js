const bubbleSort = function* (arrStore) {
  const { arr } = arrStore;
  const colorCompare = 'red';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      yield arrStore.compare(i, j, colorCompare);
      if (arr[j - 1] > arr[j]) {
        yield arrStore.swap(j - 1, j);
      }
    }
  }
};

export default bubbleSort;