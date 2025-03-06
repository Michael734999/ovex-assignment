import { TextProps } from "react-native";
import { IStyledComponent } from "styled-components/native";

export interface ColorTypes {
  foreground: {
    primary: string;
    secondary: string;
    accent: string;
    danger: string;
    white: string;
  };
  background: {
    app: string;
    primary: string;
    secondary: string;
    disabled: string;
    accent: string;
    skeleton: string;
    loading: string;
  };
  white: string;
  border: string;
}

export interface FontSizeTypes {
  xxs: number;
  xs: number;
  s: number;
  sm: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  h: number;
}

export interface ThemeVariantTypes {
  heading: IStyledComponent<"native", Omit<TextProps, never>>;
  title: IStyledComponent<"native", Omit<TextProps, never>>;
  subtitle: IStyledComponent<"native", Omit<TextProps, never>>;
  body1: IStyledComponent<"native", Omit<TextProps, never>>;
  body2: IStyledComponent<"native", Omit<TextProps, never>>;
  body3: IStyledComponent<"native", Omit<TextProps, never>>;
  accent: IStyledComponent<"native", Omit<TextProps, never>>;
}

export interface Spacing {
  tiny: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  b: number;
}

export interface ThemeTypes {
  colors: ColorTypes;
  font: {
    fontSize: FontSizeTypes;
    variant: ThemeVariantTypes;
  };
  spacing: Spacing;
}
