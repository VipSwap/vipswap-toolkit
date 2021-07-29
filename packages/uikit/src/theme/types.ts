import { FlattenSimpleInterpolation } from 'styled-components'

export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  cardBorder: string;
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  dropdown: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  textSubtleBg: string;
  borderColor: string;
  card: string;
  navBg: string;
  navItemBg: string;
  navText: string;
  navHover: string;
  navActivityText: string;
  navDropdownBg: string;
  navDropdownText: string;
  navDropdownBorder?: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
  // base
  white: string
  black: string

  // text
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string

  // backgrounds / greys
  bg1: string
  bg2: string
  bg3: string
  bg4: string
  bg5: string

  modalBG: string
  advancedBG: string

  //blues
  primary1: string
  primary2: string
  primary3: string
  primary4: string
  primary5: string

  primaryText1: string

  // pinks
  secondary1: string
  secondary2: string
  secondary3: string

  // other
  red1: string
  red2: string
  green1: string
  yellow1: string
  yellow2: string
  blue1: string
};

export type mediaWidth = any

export type grids = {
  sm: number,
  md: number,
  lg: number
}
export type ZIndices = {
  dropdown: number;
  modal: number;
};

export type shadow1 = string
export type flexColumnNoWrap = FlattenSimpleInterpolation
export type flexRowNoWrap = FlattenSimpleInterpolation
