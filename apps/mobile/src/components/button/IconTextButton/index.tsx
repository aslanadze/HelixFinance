import React, {useState} from "react";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from "react-native-reanimated";
import {Pressable, TextStyle, StyleSheet} from "react-native";
import {ActionCallbacksType} from "../../types";
import {SPACING} from "../../../theme/spacing";
import {COLORS} from "../../../theme/colors";
import Typewriter from "../../ui/Typewriter";

interface IconTextButtonProps extends TextStyle, ActionCallbacksType {
    text: string;
    icon: any;
}

const IconTextButton: React.FC<IconTextButtonProps> = ({
                                                           backgroundColor,
                                                           color,
                                                           fontSize,
                                                           fontWeight,
                                                           borderRadius,
                                                           borderWidth,
                                                           borderColor,
                                                           padding,
                                                           flex,
                                                           minWidth,
                                                           maxWidth,
                                                           loadingText,
                                                           text, icon
                                                       }) => {
    const [isLoading, setIsLoading] = useState(false);
    const animatedProgress = useSharedValue(0);

    const onPress = () => {
        const nextState = !isLoading;
        setIsLoading(nextState);
        animatedProgress.value = withTiming(nextState ? 1 : 0, {duration: 500});
    }

    const animatedPressableContainerStyle = useAnimatedStyle(() => ({
        opacity: interpolate(animatedProgress.value, [0, 1], [1, 0], Extrapolation.CLAMP),
        transform: [{scale: interpolate(animatedProgress.value, [0, 1], [1, 0.95], Extrapolation.CLAMP)}]
    }));


    const animatedLoadingContainerStyle = useAnimatedStyle(() => ({
        opacity: interpolate(animatedProgress.value, [0, 0.6], [0, 1], Extrapolation.CLAMP),
    }))

    return (
        <Animated.View style={[{
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            borderWidth: borderWidth,
            borderColor: borderColor,
            padding: padding || 10,
            flex: flex,
            minWidth: minWidth,
            maxWidth: maxWidth,
        }]}>
            <Animated.View style={[{
                ...StyleSheet.absoluteFillObject,
                justifyContent: 'center',
                alignItems: 'center',
            }, animatedLoadingContainerStyle]}>
                <Typewriter
                    text={loadingText || ""}
                    started={isLoading}
                    speed={100}
                    autoRepeat={true}
                    style={{
                        fontSize: fontSize || SPACING.xl,
                        color: color || COLORS.dark,
                        fontWeight: fontWeight || '500',
                    }}
                />
            </Animated.View>
            <Pressable onPress={onPress}>
                <Animated.View style={[{
                    flexDirection: 'row-reverse',
                    gap: SPACING.lg,
                    justifyContent: 'center',
                    alignItems: 'center',
                }, animatedPressableContainerStyle]}>

                    <Animated.Text style={{
                        color: color,
                        fontSize: fontSize || SPACING.lg,
                        fontWeight: fontWeight,
                    }}>
                        {text}
                    </Animated.Text>

                    <Animated.View style={[{
                        backgroundColor: COLORS.background,
                        borderRadius: SPACING.xxxl,
                        padding: SPACING.xs,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }]}>
                        {icon}
                    </Animated.View>
                </Animated.View>


            </Pressable>

        </Animated.View>
    )
}

export default IconTextButton;