import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { TarefasProvider } from "@/contexts/tarefas";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        LexendBold: require("../assets/fonts/Lexend-Bold.ttf"),
        LexendLight: require("../assets/fonts/Lexend-Light.ttf"),
        LexendMedium: require("../assets/fonts/Lexend-Medium.ttf"),
        LexendRegular: require("../assets/fonts/Lexend-Regular.ttf"),
        LexendSemiBold: require("../assets/fonts/Lexend-SemiBold.ttf"),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <TarefasProvider>
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="criar"
                        options={{
                            headerTransparent: true,
                            headerTitle: "Nova Tarefa",
                            headerTintColor: "#4169E1",
                            headerTitleAlign: "center",
                            headerTitleStyle: {
                                fontFamily: "LexendBold",
                                fontSize: 24,
                            },
                        }}
                    />
                </Stack>
            </ThemeProvider>
        </TarefasProvider>
    );
}
