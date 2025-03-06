import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const StyledTextInput = styled.TextInput`
  padding: ${({ theme }) => theme.spacing.s}px
    ${({ theme }) => theme.spacing.xs}px;
  flex-grow: 1;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.spacing.xs}px;
`;

export const TextInputContainer = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.xxs}px;
  justify-content: center;
  elevation: 4;
  width: 100%;
  shadow-color: #171717;
  border-color: #ddd;
  shadow-offset: 0.1px 0.1px;
  border-width: 1px;
  shadow-opacity: 0.1;
  border-bottom-width: 2px;
  border-bottom-color: black;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.s}px;
`;
