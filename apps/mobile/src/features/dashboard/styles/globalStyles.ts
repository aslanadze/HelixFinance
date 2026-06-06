import {StyleSheet} from 'react-native';
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";

const globalStyles = StyleSheet.create({
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
});
export default globalStyles;