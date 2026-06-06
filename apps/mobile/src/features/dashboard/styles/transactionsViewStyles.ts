import {StyleSheet} from "react-native";
import {SPACING} from "../../../theme/spacing";
import {COLORS} from "../../../theme/colors";

const transactionViewStyles = StyleSheet.create({
    scrollView: {
        paddingTop: SPACING.lg,
        gap: SPACING.xl
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.lg,
        alignItems: 'center',
    },
    avatarContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: SPACING.lg

    },
    avatarTitle: {
        fontSize: SPACING.xl,
        fontWeight: 'ultralight',
        color: COLORS.white
    },
    priceContainer: {
        alignItems: 'flex-end'
    },


});

export default transactionViewStyles;