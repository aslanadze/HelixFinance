import React, {useEffect} from 'react';
import Animated, {Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming} from "react-native-reanimated";
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";
import {Pressable, PressableProps, TextStyle} from "react-native";
import {ActionCallbacksType} from "../../types";

interface VariantButtonProps extends TextStyle, ActionCallbacksType, PressableProps {
    // variant: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'ghost';
    children?: React.ReactNode;
}

const VariantButton: React.FC<VariantButtonProps> = ({
                                                         children,
                                                         color,
                                                         borderStyle,
                                                         borderWidth,
                                                         borderRadius,
                                                         borderColor,
                                                         outlineStyle,
                                                         padding,
                                                         flex,
                                                         isCompleted,
                                                         onPress,
                                                         backgroundColor = COLORS.background
                                                     }) => {
    const animatedProgress = useSharedValue(0);
    const animatedFakeBorder = useAnimatedStyle(() => ({
        transform: [{rotate: `${animatedProgress.value * 360}deg`}]
    }))

    useEffect(() => {
        if (!isCompleted) {
            animatedProgress.value = 0;
            animatedProgress.value = withRepeat(
                withTiming(1, {duration: 1000, easing: Easing.linear}),
                -1,
                false
            );
        } else {
            animatedProgress.value = withTiming(0, {duration: 300, easing: Easing.linear});
        }
    }, [isCompleted]);

    return (
        <Pressable onPress={onPress} style={[{
            alignItems: 'center',
            flex,
            borderRadius,
            padding,
            backgroundColor,
            outlineStyle
        }]}>
            <Animated.View style={[{
                position: 'absolute',
                borderWidth,
                borderColor,
                borderStyle,
                borderRadius,
                padding: padding,
                bottom: 0,
                top: 0,
                right: 0,
                left: 0,

            }, animatedFakeBorder]}>

            </Animated.View>
            {children}
        </Pressable>
    )
}

export default VariantButton;