import React, { useRef, useMemo, useCallback } from "react";
import {
  BottomSheetContainer,
  BottomSheetTitleContainer,
  Container,
  ExitIconContainer,
  IconContainer,
  IconWrapper,
  NotFoundContainer,
  StyledSelectInput,
} from "./Select.styles";
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ListItem } from "@components/ListItem";
import { Controller, useForm } from "react-hook-form";
import { TextInputContainer } from "../TextInput/TextInput.styles";
import { useTheme } from "styled-components/native";
import { Typography } from "@components/Typography";
import { View, Text, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { SearchInput } from "../SearchInput";
import { SelectProps } from "./Select.types";
import { CurrencyResponse } from "@services/types";

export const Select = ({
  items,
  label,
  name,
  control,
  ...rest
}: SelectProps) => {
  const selectSheet = useRef<BottomSheetModal>(null);
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();

  const { control: searchControl, watch } = useForm({
    defaultValues: { searchQuery: "" },
  });

  const openSelectSheet = () => selectSheet.current?.present();
  const closeSelectSheet = () => selectSheet.current?.dismiss();

  const handleSelect = useCallback(
    (item: CurrencyResponse, onChange: (e: CurrencyResponse) => void) => {
      onChange(item);
      closeSelectSheet();
    },
    [],
  );

  const searchQuery = watch("searchQuery");

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, items]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onBlur, onChange } }) => (
        <>
          <Container onPress={openSelectSheet}>
            <View pointerEvents="none">
              <Typography variant="subtitle">{label}</Typography>
              <TextInputContainer>
                {value?.icon_url && (
                  <IconContainer>
                    <Image
                      resizeMode="contain"
                      style={{ width: "100%", height: "100%" }}
                      source={{ uri: value.icon_url }}
                    />
                  </IconContainer>
                )}
                <StyledSelectInput
                  returnKeyType="done"
                  onBlur={onBlur}
                  onChange={onChange}
                  selectionColor={theme.colors.foreground.primary}
                  editable={false}
                  autoCapitalize="none"
                  {...rest}
                >
                  {value?.id && (
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: theme.colors.foreground.primary,
                      }}
                    >
                      {`${value.id.toUpperCase()} `}
                    </Text>
                  )}
                  {value?.name && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.colors.foreground.primary,
                      }}
                    >
                      {value.name}
                    </Text>
                  )}
                </StyledSelectInput>
                <IconWrapper>
                  <Entypo name="chevron-down" size={24} color="black" />
                </IconWrapper>
              </TextInputContainer>
            </View>
          </Container>

          <BottomSheetModal
            ref={selectSheet}
            index={1}
            stackBehavior="replace"
            snapPoints={["90%"]}
            maxDynamicContentSize={90}
            handleStyle={{ backgroundColor: theme.colors.background.app }}
            enableDismissOnClose
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
              />
            )}
          >
            <BottomSheetContainer>
              <ExitIconContainer onPress={closeSelectSheet}>
                <Entypo name="cross" size={28} color={"black"} />
              </ExitIconContainer>
              <BottomSheetTitleContainer>
                <Typography variant="title">Select Currency</Typography>
              </BottomSheetTitleContainer>

              <SearchInput
                control={searchControl}
                placeholder="Search Crypto"
              />
              {filteredItems.length === 0 && (
                <NotFoundContainer>
                  <Typography variant="body2" align="center">
                    No currencies were found. Either update your search query,
                    or select a different source currency.
                  </Typography>
                </NotFoundContainer>
              )}
              <BottomSheetFlatList
                style={{ marginBottom: bottom }}
                data={filteredItems}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ListItem
                    onPress={() => handleSelect(item, onChange)}
                    title={item.id}
                    subTitle={item.name}
                    imageUrl={item.icon_url}
                  />
                )}
              />
            </BottomSheetContainer>
          </BottomSheetModal>
        </>
      )}
    />
  );
};
