import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const interfaceLightColors = {
  white: "#FFFFFF",
  black: "#000000",

  text1: '#000000',
  text2: '#565A69',
  text3: '#888D9B',
  text4: '#C3C5CB',
  text5: '#EDEEF2',

  // backgrounds / greys
  bg1: '#fff',
  bg2: '#fbf6ee',
  bg3: '#EDEEF2',
  bg4: '#CED0D9',
  bg5: '#888D9B',

  //specialty colors
  modalBG: 'rgba(0,0,0,0.3)',
  advancedBG: 'rgba(255,255,255,0.6)',

  //primary colors
  primary1: '#ea9f10',
  primary2: '#ea9f1080',
  primary3: '#ea9f1060',
  primary4: '#ea9f1030',
  primary5: '#FCF8F4',

  // color text
  primaryText1: '#ea9f10',

  // secondary colors
  secondary1: '#ff007a',
  secondary2: '#F6DDE8',
  secondary3: '#FDEAF1',

  // other
  red1: '#FF6871',
  red2: '#F82D3A',
  green1: '#27AE60',
  yellow1: '#FFE270',
  yellow2: '#F3841E',
  blue1: '#2172E5'
}

export const interfaceDarkColors = {
  white: "#FFFFFF",
  black: "#000000",
  // text
  text1: '#FFFFFF',
  text2: '#C3C5CB',
  text3: '#6C7284',
  text4: "#565A69",
  text5: '#2C2F36',

  // backgrounds / greys
  bg1: '#212429',
  bg2: "#2C2F36",
  bg3: '#40444F',
  bg4: '#565A69',
  bg5: '#6C7284',

  //specialty colors
  modalBG: 'rgba(0,0,0,.425)',
  advancedBG: 'rgba(0,0,0,0.1)',

  //primary colors
  primary1: "#ea9f10",
  primary2: '#ea9f1080',
  primary3: '#ea9f1060',
  primary4: '#ea9f1030',
  primary5: '#FCF8F4' ,

  // color text
  // primaryText1: darkMode ? '#6da8ff' : '#ff007a',
  primaryText1: '#6da8ff',

  // secondary colors
  secondary1: '#2172E5',
  secondary2: '#17000b26',
  secondary3: '#17000b26',

  // other
  red1: '#FF6871',
  red2: '#F82D3A',
  green1: '#27AE60',
  yellow1: '#FFE270',
  yellow2: '#F3841E',
  blue1: '#2172E5'
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  ...interfaceLightColors,
  disabled: "#E9EAEB",
  cardBorder: "#E7E3EB",
  background: "#FAFAFA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#fff",
  textSubtleBg: "#E9EAEB",
  borderColor: "#E9EAEB",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
  navBg: "#27262c",
  navItemBg: "#413A34",
  navText: "#FFF",
  navHover: "rgba(65,58,52,0.8)",
  navActivityText: "#ea9f10",
  navDropdownBg: "#27262c",
  navDropdownText: "#fff"
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  ...interfaceDarkColors,
  disabled: "#524B63",
  cardBorder: "#383241",
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  textSubtleBg: "#E9EAEB",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
  navBg: "#27262c",
  navItemBg: "#413A34",
  navText: "#FFF",
  navActivityText: "#ea9f10",
  navHover: "rgba(65,58,52,0.8)",
  navDropdownBg: "#27262c",
  navDropdownText: "#fff"
};
