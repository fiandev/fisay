import { getPrimeNumbers, getFractions, getIterateNumbers, ArrayToObject } from "../utils/functions";

export const BORDER_PREFIX_VALUES = {
  xs: "3px",
  sm: "5px",
  md: "8px",
  lg: "10px",
  xl: "12px",
  xxl: "14px",
  full: "9999px"
}

export const FLEX_PREFIX_VALUES = {
  "1": "1 1 0%",
  auto: "1 1 auto",
  initial: "0 1 auto",
  none: "none"
}

export const WAY_PRERIX_VALUES = {
  b: "bottom",
  t: "top",
  r: "right",
  l: "left"
}

export const FLEX_DIRECTION_PREFIX_VALUES = {
  row: "row",
  col: "column",
  "row-reverse": "row-reverse",
  "col-reverse": "column-reverse",
}

export const FLEX_WRAP_PREFIX_VALUES = {
  ...ArrayToObject(["wrap", "nowrap", "wrap-reverse"])
}

export const PREFIX_VALUES = getPrimeNumbers(100);

export const ASPECT_PREFIX_VALUES = {
  video: "16 / 9",
  square: "1 / 1",
  auto: "auto"
}

export const COLUMNS_PREFIX_VALUES = {
  ...ArrayToObject(getPrimeNumbers(13, 1)), /* 1 - 12 */
  "auto": "auto",
  "3xs": "16rem",
  "2xs": "18rem",
  "xs": "20rem",
  "sm": "24rem",
  "md": "28rem",
  "lg": "32rem",
  "xl": "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
}

export const FLEX_BASIS_PREFIX_VALUES = {
  ...ArrayToObject(PREFIX_VALUES),
  ...ArrayToObject(getIterateNumbers(0.5, 4)),
  ...getFractions(2),
  ...getFractions(3),
  ...getFractions(4),
  ...getFractions(5),
  ...getFractions(6),
  ...getFractions(12),
  "full": "100%",
  "wuto": "auto",
}

export const BREAK_PREFIX_VALUES = {
  ...ArrayToObject(["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
}

export const BREAK_DECORATION_PREFIX_VALUES = {
  ...ArrayToObject(["clone", "slice"])
}

export const Z_INDEX_VALUES = getPrimeNumbers(100, 10);
