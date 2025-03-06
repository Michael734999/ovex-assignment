import { theme } from "@utils/theme/theme";
import { Stack } from "expo-router";
import { StatusBar, Image } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <BottomSheetModalProvider>
          <StatusBar barStyle="light-content" />
          <Stack
            screenOptions={{
              headerShown: true,
              headerTitle: (props) => (
                <Image
                  source={require("../assets/images/ovex-logo.png")}
                  resizeMode="contain"
                />
              ),
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: `${theme.colors.background.secondary}`,
              },
              headerTintColor: `${theme.colors.white}`,
            }}
          />
        </BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
