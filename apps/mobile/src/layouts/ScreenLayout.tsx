import React from 'react';
import {StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from "../theme/colors";
import {SPACING} from "../theme/spacing";

interface ScreenLayoutProps {
    children: React.ReactNode;
    scrollable?: boolean
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({children, scrollable}) => {
    const content = <View style={styles.content}>{children}</View>;

    return (
        <SafeAreaView style={styles.saferArea}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoid}>
                {scrollable ?
                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}
                                showsVerticalScrollIndicator={false} bounces={true}>{content}</ScrollView> : content}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    saferArea: {
        flex: 1,
        backgroundColor: COLORS.background || '#020617',
    },
    keyboardAvoid: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.md || 16,
        paddingTop: SPACING.md || 16,
        paddingBottom: SPACING.xl || 24,
    },
})
export default ScreenLayout;