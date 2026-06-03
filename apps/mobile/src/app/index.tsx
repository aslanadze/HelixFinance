import React, {useEffect} from "react";
import {View, ActivityIndicator, StyleSheet} from "react-native";
import {useRouter} from "expo-router";
import {COLORS} from "../theme/colors";

export default function RootIndex() {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = true;

        const timer = setTimeout(() => {
            if (isLoggedIn) {
                router.replace('/(tabs)');
            } else {
                router.replace('/(auth)/login');
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background || '#020617',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator size="large" color={COLORS.primary || '#007AFF'}/>
        </View>
    )
}