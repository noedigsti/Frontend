import styled from "styled-components";
import { border, color, layout, space, typography } from "styled-system";

interface CardProps {
  bg?: string;
  maxWidth?: string;
  borderRadius?: number;
  mx?: string;
  mt?: string;
}

export const Card = styled.div<CardProps>`
  bg: ${(props) => props.bg || "white"};
  max-width: ${(props) => props.maxWidth || "100%"};
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  margin: ${(props) => props.mx || "0 auto"};
  margin-top: ${(props) => props.mt || "0"};
  ${border}
  ${color}
  ${layout}
  ${space}
`;

interface CardHeaderProps {
  p?: string;
  borderBottomWidth?: number;
  borderBottomColor?: string;
  borderBottomStyle?: string;
}

export const CardHeader = styled.header<CardHeaderProps>`
  h2 {
    font-weight: 600;
  }
  padding: ${(props) => props.p || "1rem"};
  border-bottom-width: ${(props) => props.borderBottomWidth || "1px"};
  border-bottom-color: ${(props) => props.borderBottomColor || "lightgrey"};
  border-bottom-style: ${(props) => props.borderBottomStyle || "solid"};
  ${border}
  ${space}
`;

interface CardContentProps {
  p?: string;
}

export const CardContent = styled.main<CardContentProps>`
  p {
    margin-bottom: 1rem;
    color: darkslategrey;
  }
  ${space}
`;

interface CardFooterProps {
  p?: string;
  borderTopWidth?: number;
  borderTopColor?: string;
  borderTopStyle?: string;
  textAlign?: string;
}

export const CardFooter = styled.footer<CardFooterProps>`
  padding: ${(props) => props.p || "1rem"};
  border-top-width: ${(props) => props.borderTopWidth || "1px"};
  border-top-color: ${(props) => props.borderTopColor || "lightgrey"};
  border-top-style: ${(props) => props.borderTopStyle || "solid"};
  text-align: ${(props) => props.textAlign || "center"};
  ${border}
  ${space}
  ${typography}
`;

interface ButtonProps {
  py?: string;
  px?: string;
  bg?: string;
  fontSize?: number;
  fontWeight?: number;
  borderRadius?: number;
}

export const Button = styled.a<ButtonProps>`
  text-decoration: none;
  padding: ${(props) => props.py || "0.5rem"} ${(props) => props.px || "1rem"};
  background-color: ${(props) => props.bg || "lightgrey"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "600"};
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  ${border}
  ${color}
  ${space}
  ${typography}
`;
