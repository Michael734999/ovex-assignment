import { CurrencyResponse } from "@services/types";
import { Control, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface SelectProps extends TextInputProps {
  items: CurrencyResponse[];
  label: string;
  name: string;
  control: Control<FieldValues, any>;
}
