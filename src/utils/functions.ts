export const getPrimeNumbers = (each: number = 10, divider: number = 2) => {
  var result = [];
  for (let i = 0; i < each; i++) {
    if (i % divider === 0 || i === 1) result.push(i);
    else continue;
  }
  
  return result;
}


export const ArrayToObject = (arr: any[]) => {
  let result: object = {};
  arr.forEach(val => {
    if (!result[val]) result[val] = val;
  })
  
  return result
}

export const getIterateNumbers = (start: number, end: number) => {
  let result: number[] = [];
  for (let i = 0; i < end; i++) {
    let value = start + i;
    result.push(value)
  }
  
  return result;
}

export const getFractions = (denominator: number) => {
  let result = {};
  for (let i = 1; i < denominator; i++) {
    let fraction = `${i}/${denominator}`;
    result[fraction] = eval(fraction) * 100 + "%";
  }
  
  return result;
}