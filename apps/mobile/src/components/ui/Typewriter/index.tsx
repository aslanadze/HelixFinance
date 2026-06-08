import React, {useState, useEffect} from 'react';
import {Text, TextStyle, TextProps, View} from "react-native";

interface TypewriterProps extends TextProps {
    text: string | string[];
    speed?: number;
    started: boolean;
    style?: TextStyle;
    autoRepeat?: boolean;
    onFinished?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
                                                   text,
                                                   // icon,
                                                   started,
                                                   speed = 100,
                                                   autoRepeat = false,
                                                   onFinished,
                                                   style,
                                                   ...rest
                                               }) => {
    const textArray = Array.isArray(text) ? text : [text];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [visibleLength, setVisibleLength] = useState(0);

    const activeText = textArray[currentTextIndex] || "";

    useEffect(() => {

        if (!started) {
            setVisibleLength(0);
            setCurrentTextIndex(0);
            return;
        }
        setVisibleLength(0);
        let currentLength = 0;
        let pauseTicks = 0;

        const maxPauseTicks = Math.round(speed * 40 / speed);

        const intervalId = setInterval(() => {
            if (currentLength < activeText.length) {
                currentLength++;
                setVisibleLength(currentLength);
            } else {
                if (pauseTicks < maxPauseTicks) {
                    pauseTicks++;
                } else {
                    if (textArray.length > 1) {
                        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
                        clearInterval(intervalId);
                    } else if (autoRepeat) {
                        currentLength = 0;
                        pauseTicks = 0;
                        setVisibleLength(0);
                    } else {
                        clearInterval(intervalId);
                        if (onFinished)
                            onFinished();
                    }
                }
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [autoRepeat, currentTextIndex, started, text, speed]);

    const visiblePart = activeText.slice(0, visibleLength);
    const transparentPart = activeText.slice(visibleLength);

    return (
        <Text style={style} numberOfLines={1} {...rest}>
            {visiblePart}
            <Text style={{color: 'transparent'}}>
                {transparentPart}
            </Text>
        </Text>
    )
}

export default Typewriter;