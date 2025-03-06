import styled from "styled-components/native";

export const ListItemContainer = styled.Pressable<{
  backgroundColor: string;
}>`
  padding: ${({ theme }) => theme.spacing.tiny}px
    ${({ theme }) => theme.spacing.xs}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex-direction: row;
  gap: 2px;
  margin-vertical: 3px;
  align-items: center;
  width: 100%;
`;

export const IconContainer = styled.View`
  width: 18px;
  height: 18px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxs}px;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: row;
`;
