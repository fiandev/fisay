"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFractions = exports.getIterateNumbers = exports.ArrayToObject = exports.getPrimeNumbers = void 0;
const getPrimeNumbers = (each = 10, divider = 2) => {
    var result = [];
    for (let i = 0; i < each; i++) {
        if (i % divider === 0 || i === 1)
            result.push(i);
        else
            continue;
    }
    return result;
};
exports.getPrimeNumbers = getPrimeNumbers;
const ArrayToObject = (arr) => {
    let result = {};
    arr.forEach(val => {
        if (!result[val])
            result[val] = val;
    });
    return result;
};
exports.ArrayToObject = ArrayToObject;
const getIterateNumbers = (start, end) => {
    let result = [];
    for (let i = 0; i < end; i++) {
        let value = start + i;
        result.push(value);
    }
    return result;
};
exports.getIterateNumbers = getIterateNumbers;
const getFractions = (denominator) => {
    let result = {};
    for (let i = 1; i < denominator; i++) {
        let fraction = `${i}/${denominator}`;
        result[fraction] = eval(fraction) * 100 + "%";
    }
    return result;
};
exports.getFractions = getFractions;
