function getArrayParams(...arr) {
  let min = Math.min.apply(-Infinity, arr);
  let max = Math.max.apply(Infinity, arr);
  let sumArr = arr.reduce(function(a, b) {
    return a + b;
  }, 0);
  let avg = Number((sumArr / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumArr = arr.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sumArr;
  };
};

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let min = Math.min.apply(-Infinity, arr);
    let max = Math.max.apply(Infinity, arr);
    let differenceMaxMin = max - min;
    return differenceMaxMin;
  };
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = null;
  let sumOddElement = null;
  let differenceSumEvenOddElement;
  if (arr.length === 0) {
    return 0;
  } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        } else {
          sumOddElement = sumOddElement + arr[i];
        };
      };
      differenceSumEvenOddElement = sumEvenElement - sumOddElement;
    return differenceSumEvenOddElement;
  };
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = null;
  let countEvenElement = null;
  let averageEvent;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      };
    };
    averageEvent = sumEvenElement / countEvenElement;
  return averageEvent;
  };
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i]);
    const arrElement = func(...arrOfArr[i]);
    if (arrElement > maxWorkerResult) {
      maxWorkerResult = arrElement;
    }
  }
  return maxWorkerResult;
}
