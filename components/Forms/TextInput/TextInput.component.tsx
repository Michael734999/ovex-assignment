import React from "react";
import { TextInputComponentProps } from "./TextInput.types";
import {
  Container,
  StyledTextInput,
  TextInputContainer,
  TextLeftWrapper,
  TextRightWrapper,
} from "./TextInput.styles";
import { useTheme } from "styled-components/native";
import { Typography } from "components/Typography";
import { Controller } from "react-hook-form";

export const TextInput = ({
  label,
  isEditable = true,
  name,
  rightText,
  leftText,
  control,
  ...rest
}: TextInputComponentProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Container>
      <Typography variant="subtitle">{label}</Typography>
      <TextInputContainer>
        <TextLeftWrapper>
          <Typography variant="body1">{leftText}</Typography>
        </TextLeftWrapper>
        <Controller
          name={name}
          defaultValue="0"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <StyledTextInput
              returnKeyType="done"
              onBlur={onBlur}
              onChangeText={onChange}
              selectionColor={theme.colors.foreground.primary}
              value={value}
              editable={isEditable}
              autoCapitalize="none"
              placeholder={label}
              {...rest}
            />
          )}
        />
        <TextRightWrapper>
          <Typography variant="body1">{rightText}</Typography>
        </TextRightWrapper>
      </TextInputContainer>
    </Container>
  );
};
