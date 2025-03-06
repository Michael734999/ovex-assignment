import React from "react";
import {
  IconContainer,
  IconWrapper,
  ListItemContainer,
} from "./ListItem.styles";
import { ListItemProps } from "./ListItem.types";
import { Typography } from "@components/Typography";
import { useTheme } from "styled-components/native";
import { Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export const ListItem = ({
  title,
  onPress,
  imageUrl,
  subTitle,
  backgroundColor,
}: ListItemProps): JSX.Element => {
  const theme = useTheme();
  return (
    <ListItemContainer
      backgroundColor={backgroundColor ?? theme.colors.white}
      onPress={onPress}
    >
      {imageUrl && (
        <IconContainer>
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
            source={{ uri: imageUrl }}
          />
        </IconContainer>
      )}
      <Typography variant="body2">{title.toUpperCase()}</Typography>
      {subTitle && <Typography variant="body3">{subTitle}</Typography>}
      <IconWrapper>
        <Entypo name="chevron-right" size={20} color="black" />
      </IconWrapper>
    </ListItemContainer>
  );
};
