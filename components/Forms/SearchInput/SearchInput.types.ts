import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface SearchInputProps extends TextInputProps {
  control: Control<{ searchQuery: string }, any>;
}
