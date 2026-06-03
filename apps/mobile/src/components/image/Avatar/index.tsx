import React from 'react';
import {Image, View} from "react-native";
import {COLORS} from "../../../theme/colors";
import * as console from "node:console";
import {SPACING} from "../../../theme/spacing";

interface AvatarProps {
    source: any;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
    radius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
    resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat';
    border: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
    borderWidth?: number;
    borderColor?: string;
    padding?: number
}

const Avatar: React.FC<AvatarProps> = ({
                                           source,
                                           size = 'sm',
                                           radius = 'none',
                                           resizeMode = 'cover',
                                           border = 'none',
                                           borderWidth,
                                           borderColor,
                                           padding
                                       }) => {

    const getImageContainerStyle = () => {
        const baseStyle = {
            width: SPACING[size],
            height: SPACING[size],
            borderRadius: radius === 'none' ? 0 : SPACING[radius],
            overflow: 'hidden' as const,
            padding: padding || 0
        };

        const hasBorder = border && border !== 'none';

        if (hasBorder) {
            return {
                ...baseStyle,
                borderWidth: borderWidth || 1,
                borderColor: borderColor || COLORS.border,
            }
        }

        return baseStyle;
    }


    return (
        <View style={getImageContainerStyle()}>
            <Image style={{width: '100%', height: '100%', borderRadius: radius === 'none' ? 0 : SPACING[radius]}}
                   resizeMode={resizeMode} source={source}/>
        </View>
    )
}


export default Avatar;