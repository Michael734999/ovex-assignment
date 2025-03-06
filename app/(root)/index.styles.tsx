import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background.app};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  margin-top: 50px;
`;

export const CardContainer = styled.View`
  width: 100%;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.m}px
    ${({ theme }) => theme.spacing.s}px;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  padding-vertical: ${({ theme }) => theme.spacing.m}px;
`;

export default Container;
