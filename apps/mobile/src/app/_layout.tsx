import {useContext} from "react";
import {createContext, useEffect, useState} from "react";
import {Stack} from 'expo-router';
import {StatusBar} from "expo-status-bar";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {COLORS} from "../theme/colors";
import Splash1 from "../components/splash/Splash1";
import {View, StyleSheet} from "react-native";
import LoadingSplash from "../components/splash/LoadingSplash";


const LoadingContext = createContext({
    showLoading: (text: string | string[]) => {
    },
    hideLoading: () => {
    },
});

export const useGlobalLoading = () => useContext(LoadingContext);

SplashScreen.preventAutoHideAsync().catch(() => {
});

export default function RootLayout() {
    const [splashRemoved, setSplashRemoved] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState<string | string[]>([
        "Loading...",
        "Please wait a moment",
        "We are preparing your data",
        "This may take a while",
        "Thank you for your patience",
        "It will take a while",
    ]);

    const showLoading = (text: string | string[]) => {
        if (text)
            setLoadingText(text);
        setIsLoading(true);
    }

    const hideLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{showLoading, hideLoading}}>
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
                <LoadingSplash visible={isLoading} text={loadingText}/>
                {!splashRemoved && (
                    <View style={{...StyleSheet.absoluteFillObject, zIndex: 9999}}>
                        <Splash1
                            onAnimatedEnd={() => setSplashRemoved(true)}
                        />
                    </View>

                )}
            </GestureHandlerRootView>
        </LoadingContext.Provider>
    )
}