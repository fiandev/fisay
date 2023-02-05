"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimeNumbers = void 0;
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
