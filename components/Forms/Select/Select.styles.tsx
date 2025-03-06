import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxs}px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxs}px;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  padding-left: ${({ theme }) => theme.spacing.xs}px;
  width: 22px;
  height: 22px;
`;

export const ExitIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spacing.xxs}px;
  padding: ${({ theme }) => theme.spacing.xs}px;
  z-index: 10;
`;

export const NotFoundContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.m}px;
`;

export const BottomSheetTitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.l}px;
  align-items: center;
`;

export const BottomSheetContainer = styled.View`
  flex: 1;
  padding-horizontal: 12px;
  background-color: ${({ theme }) => theme.colors.background.app};
`;

export const StyledSelectInput = styled.TextInput`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.s}px
    ${({ theme }) => theme.spacing.xs}px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.foreground.primary};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  text-align: left;
  padding-left: ${({ theme }) => theme.spacing.xs}px;
`;
