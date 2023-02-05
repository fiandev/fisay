"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Z_INDEX_VALUES = exports.PREFIX_VALUES = exports.WAY_PRERIX_VALUES = exports.BORDER_PREFIX_VALUES = void 0;
const functions_1 = require("../utils/functions");
exports.BORDER_PREFIX_VALUES = {
    xs: "3px",
    sm: "5px",
    md: "8px",
    lg: "10px",
    xl: "12px",
    xxl: "14px",
    full: "9999px"
};
exports.WAY_PRERIX_VALUES = {
    b: "bottom",
    t: "top",
    r: "right",
    l: "left"
};
exports.PREFIX_VALUES = (0, functions_1.getPrimeNumbers)(100);
exports.Z_INDEX_VALUES = (0, functions_1.getPrimeNumbers)(100, 10);
