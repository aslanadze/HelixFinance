import React, {useEffect} from 'react';
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";
import {View, Text, TextStyle, ViewStyle} from "react-native";

interface AlertTextProps extends TextStyle, ViewStyle {
    children?: React.ReactNode;
    type?: 'simple' | 'info' | 'success' | 'warning' | 'error';
}

const Label: React.FC<AlertTextProps> = ({
                                             children,
                                             color,
                                             type,
                                             padding,
                                             fontSize,
                                             borderRadius,
                                             borderWidth,
                                             borderColor,
                                             fontWeight,
                                             backgroundColor,
                                             justifyContent = 'center',
                                             alignItems = 'center'
                                         }) => {


    const getContainerStyle = () => {
        const baseStyle = {
            borderRadius: borderRadius || 0,
            borderWidth: borderWidth || 0,
            borderColor: borderColor,
            alignItems:
            alignItems,
            justifyContent:
            justifyContent,
            padding: padding,
            backgroundColor: backgroundColor
        };

        switch (type) {
            case 'simple': {
                baseStyle.backgroundColor = COLORS.surface;
                break;
            }
            case 'info': {
                baseStyle.backgroundColor = COLORS.info;
                break;
            }
            case 'success': {
                baseStyle.backgroundColor = COLORS.greenBackground;
                break;
            }
            case 'error': {
                baseStyle.backgroundColor = COLORS.error;
                break;
            }
            case 'warning': {
                baseStyle.backgroundColor = COLORS.warning;
                break;
            }
        }

        return baseStyle;
    }

    const getTextStyle = () => {
        const baseStyle = {
            fontSize: fontSize,
            color: color,
            fontWeight: fontWeight
        };

        switch (type) {
            case 'simple': {
                baseStyle.color = COLORS.white;
                break;
            }
            case 'success': {
                baseStyle.color = COLORS.success;
                break;
            }
            case 'info': {
                baseStyle.color = COLORS.white;
                break;
            }
            case 'error': {
                baseStyle.color = COLORS.white;
                break;
            }
            case 'warning': {
                baseStyle.color = COLORS.white;
                break;
            }
        }

        return baseStyle;
    }


    return (
        <View style={{
            justifyContent: 'center'
        }}>
            <View style={getContainerStyle()}>
                <Text style={getTextStyle()}>
                    {children}
                </Text>
            </View>
        </View>

    )
}

export default Label;