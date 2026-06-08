import React, {useEffect, useState} from "react";
import Animated, {useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import Typewriter from "../../ui/Typewriter";
import {SPACING} from "../../../theme/spacing";
import {COLORS} from "../../../theme/colors";
import {StyleSheet} from "react-native";
import LottieView from "lottie-react-native";
import {View} from "react-native";

interface LoadingSplashProps {
    visible: boolean;
    text: string | string[];
}

const LoadingSplash: React.FC<LoadingSplashProps> = ({visible, text}) => {
    const opacity = useSharedValue(0);
    useEffect(() => {
        opacity.value = withTiming(visible ? 1 : 0, {duration: 500});
    }, [visible]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))
    return (
        <Animated.View style={[{
            ...StyleSheet.absoluteFillObject,
            zIndex: 999999,
            backgroundColor: COLORS.background,
            alignItems: 'center',
            justifyContent: 'center',
            padding: SPACING.xxl,

        }, animatedStyle]}>
            <LottieView style={{width: 200, height: 200}}
                        source={require('../../../../assets/animations/lottie/money1.json')} autoPlay loop/>

            <Animated.Text>

                <Typewriter text={text} started={visible} speed={100} autoRepeat={true} style={{
                    fontSize: SPACING.xl,
                    fontWeight: 'bold',
                    color: COLORS.white,
                }}/>
            </Animated.Text>

        </Animated.View>
    )
};

export default LoadingSplash;