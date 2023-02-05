import { getPrimeNumbers } from "../utils/functions";

export const BORDER_PREFIX_VALUES = {
  xs: "3px",
  sm: "5px",
  md: "8px",
  lg: "10px",
  xl: "12px",
  xxl: "14px",
  full: "9999px"
}


export const WAY_PRERIX_VALUES = {
  b: "bottom",
  t: "top",
  r: "right",
  l: "left"
}


export const PREFIX_VALUES = getPrimeNumbers(100);

export const Z_INDEX_VALUES = getPrimeNumbers(100, 10);