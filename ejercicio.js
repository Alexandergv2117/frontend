const sumRange = (array) => {
  let suma = 0;
  let start;
  let end;

  if (array[0] < array[1]) {
    start = array[0];
    end = array[1];
  } else {
    start = array[1];
    end = array[0];
  }

  for (let i = start; i <= end; i++) {
    suma += i;
  }

  return suma;
}

console.log(sumRange([5, 2])); // 10