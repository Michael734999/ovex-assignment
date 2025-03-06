import "styled-components/native";
import { ThemeTypes } from "./utils/theme/types";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeTypes {}
}
