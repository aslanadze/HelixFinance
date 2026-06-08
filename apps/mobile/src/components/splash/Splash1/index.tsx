import React, {useEffect} from 'react';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import Typewriter from "../../ui/Typewriter";
import {StyleSheet} from "react-native";
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";
import {scheduleOnRN} from "react-native-worklets";
import {SplashScreen} from "expo-router";

interface Splash1Props {
    // isReady: boolean;
    onAnimatedEnd: () => void;
}

const Splash1: React.FC<Splash1Props> = ({onAnimatedEnd}) => {
    const opacity = useSharedValue(1);
    const [textAnimatedFinished, setTextAnimatedFinished] = React.useState(false);
    useEffect(() => {
        SplashScreen.hideAsync().catch(() => {
        });
    }, []);

    useEffect(() => {
        if (textAnimatedFinished) {
            opacity.value = withTiming(0, {duration: 600});

            const timer = setTimeout(() => {
                onAnimatedEnd();
            }, 600);

            return () => clearTimeout(timer);
        }
    }, [textAnimatedFinished]);

    const animatedContainerStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))
    return (
        <Animated.View style={[{
            ...StyleSheet.absoluteFillObject,
            zIndex: 1000,
            backgroundColor: COLORS.background,
            alignItems: 'center',
            justifyContent: 'center',
            padding: SPACING.xxl,
        }, animatedContainerStyle]}>
            <Animated.Text>
                <Typewriter text={["Welcome to HelixFinance App"]} started={true}
                            autoRepeat={false}
                            onFinished={() => setTextAnimatedFinished(true)} style={{
                    fontSize: SPACING.xxl,
                    fontWeight: 'bold',
                    color: COLORS.white,
                }}/>
            </Animated.Text>
        </Animated.View>
    )
}

export default Splash1;