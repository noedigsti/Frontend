import styled from "styled-components";
import { border, color, position, space, typography } from "styled-system";

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

interface FooterStyledProps extends StyledPositionProps, StyledSpaceProps, StyledColorProps, StyledTypographyProps
 {}

export const FooterStyled = styled.footer<FooterStyledProps>`
    ${position}
    ${space}
    ${color}
    ${typography}
`;