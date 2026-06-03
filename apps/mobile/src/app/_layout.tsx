import {useEffect} from "react";
import {Stack} from 'expo-router';
import {StatusBar} from "expo-status-bar";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {COLORS} from "../theme/colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    useEffect(() => {
        const prepareApp = async () => {
            try {
                await SplashScreen.hideAsync();
            } catch (e) {
                console.warn(e);
            }
        }

        prepareApp();
    }, []);

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaProvider>
                <StatusBar style="light" backgroundColor={COLORS.background || '#020617'}/>
                <Stack screenOptions={{
                    headerShown: false,
                    animation: 'fade_from_bottom',
                    contentStyle: {backgroundColor: COLORS.background || '#020617'}
                }}>
                    <Stack.Screen name={"index"}/>
                </Stack>
            </SafeAreaProvider>

        </GestureHandlerRootView>
    )
}