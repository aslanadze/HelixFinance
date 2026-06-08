import React from 'react';
import {Dimensions} from "react-native";
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";
import {ArrowRight, Check} from "lucide-react-native";
import {Gesture, GestureDetector, GestureHandlerRootView} from "react-native-gesture-handler";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";


const BUTTON_HEIGHT = SPACING.xxl * 2;
const BUTTON_PADDING = SPACING.lg;
const HANDLE_SIZE = BUTTON_HEIGHT - BUTTON_PADDING * 2;

interface SwipeButtonProps {
    onSwipeSuccess?: () => void;
    text: string;
    successText?: string;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({onSwipeSuccess, text, successText}) => {
    const screenWidth = Dimensions.get('window').width;
    const containerWidth = screenWidth - (SPACING.md) * 2;
    const SWIPE_RANGE = containerWidth - HANDLE_SIZE - BUTTON_PADDING * 2;
    const translateX = useSharedValue(0);
    const isCompleted = useSharedValue(0);

    const gesture = Gesture.Pan().onUpdate((event) => {
        if (event.translationX >= 0 && event.translationX <= SWIPE_RANGE) {
            translateX.value = event.translationX;

        }
    }).onEnd(() => {
        if (translateX.value > SWIPE_RANGE * 0.75) {
            translateX.value = withSpring(SWIPE_RANGE);
            isCompleted.value = withSpring(1);

            if (onSwipeSuccess) onSwipeSuccess();
        } else {
            translateX.value = withSpring(0);
            isCompleted.value = withSpring(0);
        }
    });

    const animatedHandleStyle = useAnimatedStyle(() => ({
        transform: [{translateX: translateX.value}]
    }));

    const animatedInitialTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [0, SWIPE_RANGE * 0.4], [1, 0], Extrapolation.CLAMP);
        return ({
            opacity: opacity
        })
    });

    const animatedSuccessTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [0, SWIPE_RANGE * 0.4], [0, 1], Extrapolation.CLAMP);
        return ({
            opacity: opacity
        })
    });

    const animatedArrowStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [0, SWIPE_RANGE * 0.75], [1, 0], Extrapolation.CLAMP);
        const scale = interpolate(translateX.value, [0, SWIPE_RANGE * 0.75], [1, 0.3], Extrapolation.CLAMP);
        return ({
            opacity,
            transform: [{scale}],
            position: "absolute"
        })
    });

    const animatedCheckStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [SWIPE_RANGE * 0.75, SWIPE_RANGE], [0, 1], Extrapolation.CLAMP);
        const scale = interpolate(translateX.value, [SWIPE_RANGE * 0.75, SWIPE_RANGE], [0.3, 1], Extrapolation.CLAMP);
        return ({
            opacity,
            transform: [{scale}],
            position: "absolute"
        })
    })

    return (
        <GestureHandlerRootView style={{
            backgroundColor: COLORS.dark,
            height: SPACING.xxl * 1.5,
            borderRadius: SPACING.xxxl,
            alignItems: 'center',
            justifyContent: "center"
        }}>
            <Animated.Text style={[{
                color: COLORS.white,
                fontSize: SPACING.lg,
                fontWeight: '600',
                position: 'absolute'
            }, animatedInitialTextStyle]}>
                {text}
            </Animated.Text>

            <Animated.Text style={[{
                color: COLORS.white,
                fontSize: SPACING.lg,
                fontWeight: '600',
                position: 'absolute'
            }, {color: COLORS.textPrimary, fontWeight: '700'}, animatedSuccessTextStyle]}>
                {successText}
            </Animated.Text>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[{
                    width: HANDLE_SIZE,
                    height: HANDLE_SIZE,
                    borderRadius: HANDLE_SIZE / 2,
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 5,
                    shadowColor: COLORS.dark,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 3,
                }, animatedHandleStyle]}>
                    <Animated.View style={[animatedArrowStyle]}>
                        <ArrowRight size={SPACING.xxl} color={COLORS.dark}/>
                    </Animated.View>
                    <Animated.View style={[animatedCheckStyle]}>
                        <Check size={SPACING.xxl} color={COLORS.success}/>
                    </Animated.View>
                </Animated.View>
            </GestureDetector>

        </GestureHandlerRootView>
    )
}

export default SwipeButton;