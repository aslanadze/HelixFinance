import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../../theme/colors';
import {SPACING} from '../../../theme/spacing';

export const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SPACING.lg || 16,
        paddingTop: Platform.OS === 'android' ? 8 : 0,
    },

    // right side button container
    headerButtonContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4
    },
    circleButton: {
        backgroundColor: COLORS.white,
        borderRadius: SPACING.xxl,
        borderWidth: SPACING.xs,
        borderColor: COLORS.border,
        padding: SPACING.sm
    },
    circleButtonDisabled: {
        backgroundColor: COLORS.background,
        borderRadius: SPACING.xxl,
        borderWidth: SPACING.xs,
        borderColor: COLORS.border,
        padding: SPACING.sm
    },

    // left side profile container
    headerProfileContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 5
    },

    // scroll wrapper with all tabs
    horizontalScrollContent: {
        gap: 10
    },
    quickActionButton: {
        backgroundColor: COLORS.surface,
        borderWidth: 2,
        borderColor: COLORS.border,
        borderRadius: SPACING.lg,
        padding: SPACING.sm,
    },
    quickActionButtonText: {
        color: COLORS.textMuted,
        fontSize: SPACING.lg
    },
    activeQuickActionButtonText: {
        color: COLORS.textPrimary,
        fontSize: SPACING.lg
    },

    mainViewContainer: {
        flex: 1,
        width: '100%',
        marginTop: SPACING.lg,
        overflow: 'hidden',
    },


});