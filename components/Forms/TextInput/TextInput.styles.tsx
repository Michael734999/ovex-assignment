import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${({ theme }) => theme.spacing.xxs}px;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.s}px 0px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground.primary};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  text-align: left;
`;

export const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xxs}px;
  justify-content: flex-start;
  elevation: 4;
  shadow-color: #171717;
  border-color: #ddd;
  shadow-offset: 0.1px 0.1px;
  border-width: 1px;
  shadow-opacity: 0.1;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  width: 100%;
  padding-right: ${({ theme }) => theme.spacing.xs}px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s}px;
  justify-content: center;
  align-items: center;
`;

export const TextRightWrapper = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextLeftWrapper = styled.View`
  padding-left: ${({ theme }) => theme.spacing.xs}px;
`;
