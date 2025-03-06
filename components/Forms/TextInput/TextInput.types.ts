import { ComponentType } from "react";
import { Control, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface TextInputComponentProps extends TextInputProps {
  label: string;
  LeftIcon?: ComponentType<unknown>;
  name: string;
  rightText: string;
  leftText: string;
  control: Control<FieldValues, any>;
  isEditable?: boolean;
}

export type InputTypes = {
  hasFocus: boolean;
  hasError: boolean;
  isEditable: boolean;
};
