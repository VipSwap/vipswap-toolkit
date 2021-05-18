import { AlertTheme } from "../components/Alert/types";
import { CardTheme } from "../components/Card/types";
import { RadioTheme } from "../components/Radio/types";
import { ToggleTheme } from "../components/Toggle/types";
import { TooltipTheme } from "../components/Tooltip/types";
import { NavTheme } from "../widgets/Menu/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices, mediaWidth, grids, shadow1, flexColumnNoWrap, flexRowNoWrap } from "./types";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  alert: AlertTheme;
  colors: Colors;
  card: CardTheme;
  nav: NavTheme;
  modal: ModalTheme;
  radio: RadioTheme;
  toggle: ToggleTheme;
  tooltip: TooltipTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
  mediaWidth: mediaWidth;
  grids: grids;
  shadow1: shadow1;
  flexColumnNoWrap: flexColumnNoWrap;
  flexRowNoWrap: flexRowNoWrap;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
