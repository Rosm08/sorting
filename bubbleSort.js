
function bubbleSort(array) {
  return swap(array);
}

function swap(array) {
  console.log("me ejecute");
  if (array.length <= 0) {
    return array;
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      let auxiliar = array[j];

      if (array[j] > array[j + 1]) {
        array[j] = array[j + 1];
        array[j + 1] = auxiliar;
      }
    }
  }

  return array;
}
