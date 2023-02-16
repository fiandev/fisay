"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Z_INDEX_VALUES = exports.BREAK_DECORATION_PREFIX_VALUES = exports.BREAK_PREFIX_VALUES = exports.FLEX_BASIS_PREFIX_VALUES = exports.COLUMNS_PREFIX_VALUES = exports.ASPECT_PREFIX_VALUES = exports.PREFIX_VALUES = exports.FLEX_WRAP_PREFIX_VALUES = exports.FLEX_DIRECTION_PREFIX_VALUES = exports.WAY_PRERIX_VALUES = exports.BORDER_PREFIX_VALUES = void 0;
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
exports.FLEX_DIRECTION_PREFIX_VALUES = {
    row: "row",
    col: "column",
    "row-reverse": "row-reverse",
    "col-reverse": "column-reverse",
};
exports.FLEX_WRAP_PREFIX_VALUES = Object.assign({}, (0, functions_1.ArrayToObject)(["wrap", "nowrap", "wrap-reverse"]));
exports.PREFIX_VALUES = (0, functions_1.getPrimeNumbers)(100);
exports.ASPECT_PREFIX_VALUES = {
    video: "16 / 9",
    square: "1 / 1",
    auto: "auto"
};
exports.COLUMNS_PREFIX_VALUES = Object.assign(Object.assign({}, (0, functions_1.ArrayToObject)((0, functions_1.getPrimeNumbers)(13, 1))), { "auto": "auto", "3xs": "16rem", "2xs": "18rem", "xs": "20rem", "sm": "24rem", "md": "28rem", "lg": "32rem", "xl": "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" });
exports.FLEX_BASIS_PREFIX_VALUES = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, functions_1.ArrayToObject)(exports.PREFIX_VALUES)), (0, functions_1.ArrayToObject)((0, functions_1.getIterateNumbers)(0.5, 4))), (0, functions_1.getFractions)(2)), (0, functions_1.getFractions)(3)), (0, functions_1.getFractions)(4)), (0, functions_1.getFractions)(5)), (0, functions_1.getFractions)(6)), (0, functions_1.getFractions)(12)), { "full": "100%", "wuto": "auto" });
exports.BREAK_PREFIX_VALUES = Object.assign({}, (0, functions_1.ArrayToObject)(["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]));
exports.BREAK_DECORATION_PREFIX_VALUES = Object.assign({}, (0, functions_1.ArrayToObject)(["clone", "slice"]));
exports.Z_INDEX_VALUES = (0, functions_1.getPrimeNumbers)(100, 10);
