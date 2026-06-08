import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/colors';
import {SPACING} from '../../../theme/spacing';

const styles = StyleSheet.create({
    headerContainer: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: SPACING.xxl + 7,
        fontWeight: '800',
        color: COLORS.white,
    },
    circleButton: {
        backgroundColor: COLORS.surfaceElevated,
        borderRadius: SPACING.xxl,
        borderWidth: SPACING.xs,
        borderColor: COLORS.border,
        padding: SPACING.sm,
    },

    //bill card
    billCardScrollView: {
        gap: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    billCardContainer: {
        marginTop: SPACING.lg,
        borderRadius: SPACING.lg,
        padding: SPACING.md,
        backgroundColor: COLORS.surfaceElevated,
    },
    billCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    billCardHeaderItem: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: SPACING.md,
    },
    billCardHeaderItemTitle: {
        fontSize: SPACING.xl,
        fontWeight: '600',
        color: COLORS.white,
    },
    billCardBodyItemContainer: {
        flex: 1,
        marginTop: SPACING.md,
        marginBottom: SPACING.md,
        gap: SPACING.md
    },
    billCardBodyLabel: {
        fontSize: SPACING.md,
        color: COLORS.textMuted,
    },
    billCardBodyPriceText: {
        fontSize: SPACING.xl,
        color: COLORS.white,
    },
    billCardBodyRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: SPACING.xs
    },
    backCardContainer: {
        backgroundColor: COLORS.surface,
        borderRadius: SPACING.lg,
        padding: SPACING.sm,
        overflow: 'visible',
        shadowColor: COLORS.dark,
        // shadowOffset: {width: 0, height: 10},
        // shadowOpacity: 0.2,
        // shadowRadius: 12,
        // elevation: 10
    },
    billCardBodyRow3: {
        backgroundColor: COLORS.primary,
        padding: SPACING.lg,
        minHeight: SPACING.xxxl * 2,
        borderRadius: SPACING.lg,
        gap: SPACING.xl,
        transform: [{rotate: '-3.5deg'}],

    },
    billCardBodyRow3HeaderTitle: {
        fontSize: SPACING.lg,
        fontWeight: '600',
        color: COLORS.dark,
    },
    billCardBodyPriceTextRow3: {
        fontSize: SPACING.xxl,
        color: COLORS.dark,
    },
});
export default styles;