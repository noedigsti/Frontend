// #region Global Imports
import { BaseTheme } from "styled-components";
// #endregion Global Imports

const common: BaseTheme = {
  colors: {
    transparent: "transparent",
    darkGrey: "#282C34",
    blackGrey: "#20232A",
    white: "#FFFFFF",
  },
};

interface StyledPositionProps {
  position?: string;
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}

interface StyledSpaceProps {
  m?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mx?: number;
  my?: number;
  p?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
}

interface StyledColorProps {
  bg?: string;
  color?: string;
}

interface StyledTypographyProps {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: string;
  fontStyle?: string;
}

export { common };
export type { StyledPositionProps, StyledSpaceProps, StyledColorProps, StyledTypographyProps}
