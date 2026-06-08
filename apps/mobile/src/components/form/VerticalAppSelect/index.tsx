import React, {useState, useEffect} from 'react';
import {Dimensions, Pressable} from "react-native";
import {SPACING} from "../../../theme/spacing";
import {COLORS} from "../../../theme/colors";
import {ChevronDown} from "lucide-react-native";
import {VerticalAppSelectItem} from "./type";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from "react-native-reanimated";
import Avatar from "../../image/Avatar";


interface VerticalAppSelectProps {
    dropDownItems: VerticalAppSelectItem[],
    defaultValue?: string;
    border: { borderWidth: number, borderColor: string, borderRadius: number },
    backgroundColor?: string;
}

const HEADER_HEIGHT = SPACING.xxxl * 2;
const DROPDOWN_ITEM_HEIGHT = SPACING.xxxl * 1.5;
const MAX_VISIBLE_ITEMS = 5;

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const VerticalAppSelect: React.FC<VerticalAppSelectProps> = ({
                                                                 dropDownItems,
                                                                 defaultValue,
                                                                 border,
                                                                 backgroundColor
                                                             }) => {

    const [defaultItem, setDefaultItem] = useState<VerticalAppSelectItem | undefined>(dropDownItems.find(item => item.value === defaultValue));
    const [isExpanded, setIsExpanded] = useState(false);
    const animatedProgress = useSharedValue(0);

    const animatedChevronStyle = useAnimatedStyle(() => ({
        transform: [{rotate: `${animatedProgress.value * 180}deg`}]
    }));

    const visibleItemsCount = Math.min(dropDownItems.length, MAX_VISIBLE_ITEMS);
    const MAX_LIST_HEIGHT = visibleItemsCount * DROPDOWN_ITEM_HEIGHT;

    const TOTAL_OPEN_HEIGHT = HEADER_HEIGHT + MAX_LIST_HEIGHT + SPACING.sm;
    const animatedContainerStyle = useAnimatedStyle(() => ({
        height: interpolate(animatedProgress.value, [0, 1], [HEADER_HEIGHT, TOTAL_OPEN_HEIGHT], Extrapolation.CLAMP),
        position: 'absolute',
        right: 0,
        top: 0,
    }));

    const animatedScrollStyle = useAnimatedStyle(() => ({
        maxHeight: MAX_LIST_HEIGHT,
    }))

    const closeDropDown = () => {
        setIsExpanded(false);
        animatedProgress.value = withTiming(0, {duration: 500});
    }
    const toggleDropDown = () => {
        if (isExpanded)
            closeDropDown();
        else {
            const nextState = !isExpanded;
            setIsExpanded(nextState);
            animatedProgress.value = withTiming(nextState ? 1 : 0, {duration: 300});
        }

    }

    return (
        <>
            {isExpanded && (
                <Pressable style={{
                    position: 'absolute',
                    top: -SCREEN_HEIGHT,
                    left: -SCREEN_WIDTH,
                    width: SCREEN_WIDTH * 3,
                    height: SCREEN_HEIGHT * 3,
                    backgroundColor: 'transparent',
                    zIndex: 90
                }} onPress={closeDropDown}/>
            )}
            <Animated.View style={[{
                backgroundColor: backgroundColor || COLORS.surface,
                borderRadius: border.borderRadius,
                borderWidth: border.borderWidth,
                borderColor: border.borderColor,
                // padding: 1,
                height: HEADER_HEIGHT,
                overflow: 'hidden',
                zIndex: 99
            }, animatedContainerStyle]}>
                <Pressable style={{
                    height: HEADER_HEIGHT,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }} onPress={toggleDropDown}>

                    <Avatar source={defaultItem?.image} radius={"xxxl"} resizeMode={"cover"} size={"xxxl"}
                            border={"none"}/>

                    <Animated.View style={[animatedChevronStyle]}>
                        <ChevronDown size={SPACING.xxxl} color={COLORS.textPrimary}/>

                    </Animated.View>
                </Pressable>
                <Animated.ScrollView style={[animatedScrollStyle]} nestedScrollEnabled={true}
                                     showsVerticalScrollIndicator={dropDownItems.length > MAX_VISIBLE_ITEMS}

                >
                    {dropDownItems.map((item, index) => (
                        <Animated.View key={index} style={{
                            height: DROPDOWN_ITEM_HEIGHT,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Pressable onPress={() => {
                                setDefaultItem(item);
                                closeDropDown();
                                animatedProgress.value = withTiming(0, {duration: 500});
                            }}>
                                <Avatar source={item.image} radius={"xxxl"} resizeMode={"cover"} size={"xxxl"}
                                        border={"none"}/>
                            </Pressable>

                        </Animated.View>
                    ))}
                </Animated.ScrollView>

            </Animated.View>
        </>

    )
}


export default VerticalAppSelect;