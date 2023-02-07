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