import {View, Text} from "react-native";
import globalStyles from "../styles/globalStyles";
import Label from "../../../components/typography/Label";
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";
import VerticalAppSelect from "../../../components/form/VerticalAppSelect";
import {VerticalAppSelectItem} from "../../../components/form/VerticalAppSelect/type";

const MyBalanceView = () => {
    const dropDownItems: VerticalAppSelectItem[] = [{
        id: 1,
        title: 'Australia Dollar',
        value: 'AUD',
        image: require('../../../../assets/images/currencies/australia.webp'),
    },
        {
            id: 2,
            title: 'Euro',
            value: 'EUR',
            image: require('../../../../assets/images/currencies/960px-Flag_of_Europe.png'),
        },
        {
            id: 3,
            title: 'United States Dollar',
            value: 'USD',
            image: require('../../../../assets/images/currencies/330px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.webp'),
        },
        {
            id: 4,
            title: 'Kuwait Dinar',
            value: 'KWD',
            image: require('../../../../assets/images/currencies/kuwait.jpg'),
        },
        {
            id: 4,
            title: 'Kuwait Dinar',
            value: 'KWD',
            image: require('../../../../assets/images/currencies/kuwait.jpg'),
        },
        {
            id: 4,
            title: 'Kuwait Dinar',
            value: 'KWD',
            image: require('../../../../assets/images/currencies/kuwait.jpg'),
        },        {
            id: 4,
            title: 'Kuwait Dinar',
            value: 'KWD',
            image: require('../../../../assets/images/currencies/kuwait.jpg'),
        },
    ];
    return (
        <View>
            <View style={globalStyles.headerContainer}>
                <View style={{
                    gap: 10
                }}>
                    <Label color={COLORS.white} alignItems={"flex-start"} fontSize={SPACING.xxxl} fontWeight={"bold"}>
                        Your Balance
                    </Label>
                    <View style={{
                        flexDirection: 'row',
                        gap: SPACING.lg
                    }}>
                        <Label fontSize={SPACING.xxl} color={COLORS.white}>
                            $235,056.30
                        </Label>
                        <Label type={"success"} padding={SPACING.xs} fontSize={SPACING.lg} borderRadius={SPACING.xxl}>
                            +10%
                        </Label>
                    </View>

                </View>
                <VerticalAppSelect dropDownItems={dropDownItems} defaultValue={"AUD"} border={{
                    borderWidth: 1,
                    borderColor: COLORS.border,
                    borderRadius: SPACING.xxxl
                }}/>


            </View>
        </View>
    )
}

export default MyBalanceView;