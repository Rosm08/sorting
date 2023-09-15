

//Chequea que pueda manejar un array vacío

describe("Bubble Sort", function () {
  beforeAll(function () {
    spyOn(window, "swap").and.callThrough();
  });

  it("handles an empty array", function () {
    swap.calls.reset();
    expect(bubbleSort([])).toEqual([]);
    expect(swap.calls.count()).toEqual(1);
  });

  it("Un Arreglo desordenado que termine ordenado", function () {
    swap.calls.reset();
    expect(bubbleSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
    expect(swap.calls.count()).toEqual(1);
  });

  it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
    swap.calls.reset();
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(swap.calls.count()).toEqual(1);
  });

  it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado", function () {
    swap.calls.reset();
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(swap.calls.count()).toEqual(1);
  });
});

