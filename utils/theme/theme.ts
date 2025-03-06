import { DefaultTheme } from "styled-components/native";
import { colors } from "./colors";
import { fontSize } from "./fonts";
import { spacing } from "./spacing";
import { textVariants } from "./textVariants";

export const theme: DefaultTheme = {
  colors: colors,
  spacing: spacing,
  font: {
    fontSize: fontSize,
    variant: textVariants,
  },
};
