import React from "react";
import { useTheme } from "styled-components/native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Controller } from "react-hook-form";
import {
  Container,
  IconContainer,
  StyledTextInput,
  TextInputContainer,
} from "./SearchInput.styles";
import { SearchInputProps } from "./SearchInput.types";

export const SearchInput = ({
  control,
  ...rest
}: SearchInputProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Container>
      <TextInputContainer>
        <IconContainer>
          <Fontisto name="search" size={18} color={"black"} />
        </IconContainer>
        <Controller
          name={"searchQuery"}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <StyledTextInput
              returnKeyType="done"
              onChangeText={onChange}
              onBlur={onBlur}
              selectionColor={theme.colors.foreground.primary}
              value={value}
              autoCapitalize="none"
              {...rest}
            />
          )}
        />
      </TextInputContainer>
    </Container>
  );
};
