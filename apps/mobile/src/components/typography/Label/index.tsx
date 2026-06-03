import React from 'react';
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";
import {View, Text} from "react-native";

interface AlertTextProps {
    children?: React.ReactNode;
    textColor?: string;
    type?: 'simple' | 'info' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const Label: React.FC<AlertTextProps> = ({children, textColor, type, size, radius}) => {
    const getTextColor = () => {
        if(textColor) return textColor;
        switch (type) {
            case 'info':
                return COLORS.white;
            case 'success':
                return COLORS.textSecondary;
            case 'warning':
                return COLORS.white;
            case 'error':
                return COLORS.white;
            case 'simple':
                return COLORS.white;
            default:
                return COLORS.textSecondary;
        }
    }


    return (
        <View style={{
            backgroundColor: type ? (type === 'simple' ? COLORS.surface : COLORS[type]) : COLORS.surface,
            padding: size ? SPACING[size] : SPACING.xs,
            borderRadius: radius && radius != 'none' ? SPACING[radius] : 0,
        }}>
            <Text style={{
                color: getTextColor(),
                fontSize: size ? SPACING[size] : SPACING.lg,
            }}>
                {children}
            </Text>
        </View>
    )
}

export default Label;