import { getPrimeNumbers, ArrayToObject } from "../utils/functions";

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

export const BREAK_PREFIX_VALUES = {
  ...ArrayToObject(["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
}

export const BREAK_DECORATION_PREFIX_VALUES = {
  ...ArrayToObject(["clone", "slice"])
}

export const Z_INDEX_VALUES = getPrimeNumbers(100, 10);