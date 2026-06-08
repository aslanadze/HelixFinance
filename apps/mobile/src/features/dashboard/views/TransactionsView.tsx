import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import globalStyles from "../styles/globalStyles";
import transactionsViewStyles from "../styles/transactionsViewStyles";
import Avatar from "../../../components/image/Avatar";
import {COLORS} from "../../../theme/colors";
import Label from "../../../components/typography/Label";
import {SPACING} from "../../../theme/spacing";

const TransactionsView = () => {
    const transactions = [
        {
            id: 1,
            avatar: require('../../../../assets/images/amazon-logo-amazon-icon-transparent-free-png.webp'),
            avatarBackgroundColor: COLORS.white,
            title: 'Amazon',
            price: '$124.00',
            date: 'Aug 19,2025',
        },
        {
            id: 2,
            avatar: require('../../../../assets/images/paypal.webp'),
            title: 'PayPal',
            price: '$160.00',
            date: 'Aug 22,2025',
        },
        {
            id: 3,
            avatar: require('../../../../assets/images/binance-icon-logo-png_seeklogo-598330.png'),
            title: 'Binance',
            price: '$900.00',
            date: 'Aug 22,2025',
        },
        {
            id: 4,
            avatar: require('../../../../assets/images/paypal.webp'),
            title: 'PayPal',
            price: '$20.00',
            date: 'Aug 22,2025',
        },
        {
            id: 5,
            avatar: require('../../../../assets/images/adobe-xd.png'),
            title: 'Adobe XD',
            price: '$20.00',
            date: 'Aug 22,2025',
        },
        {
            id: 6,
            avatar: require('../../../../assets/images/62bc70073fd3864405fe0551_starbucks-logo-1992-2011.png'),
            title: 'Starbucks',
            avatarBackgroundColor: COLORS.white,
            price: '$12.00',
            date: 'Aug 09,2025',
        },
        {
            id: 7,
            avatar: require('../../../../assets/images/62bc70073fd3864405fe0551_starbucks-logo-1992-2011.png'),
            title: 'Starbucks',
            avatarBackgroundColor: COLORS.white,
            price: '$12.00',
            date: 'Aug 09,2025',
        },
        {
            id: 8,
            avatar: require('../../../../assets/images/62bc70073fd3864405fe0551_starbucks-logo-1992-2011.png'),
            title: 'Starbucks',
            avatarBackgroundColor: COLORS.white,
            price: '$12.00',
            date: 'Aug 09,2025',
        },
        {
            id: 9,
            avatar: require('../../../../assets/images/62bc70073fd3864405fe0551_starbucks-logo-1992-2011.png'),
            title: 'Starbucks',
            avatarBackgroundColor: COLORS.white,
            price: '$12.00',
            date: 'Aug 09,2025',
        },

    ]
    return (
        <View>
            <Label color={COLORS.white} alignItems={"flex-start"} fontSize={SPACING.xl} fontWeight={"bold"}>
                Transactions
            </Label>
            <ScrollView contentContainerStyle={transactionsViewStyles.scrollView}>
                {transactions.map((item, index) => (
                    <View style={transactionsViewStyles.item} key={item.id}>

                        <View style={transactionsViewStyles.avatarContainer}>
                            <Text style={transactionsViewStyles.avatarTitle}>
                                {item.title}
                            </Text>
                            <Avatar source={item.avatar} radius={"xxxl"} backgroundColor={item.avatarBackgroundColor}
                                    size={"xxxl"}
                                    resizeMode={"cover"} border={"xxl"}/>
                        </View>
                        <View style={transactionsViewStyles.priceContainer}>
                            <Label color={COLORS.white} fontSize={SPACING.xl}>
                                {item.price}
                            </Label>
                            <Label fontSize={SPACING.lg} color={COLORS.surfaceElevated}
                                   >
                                {item.date}
                            </Label>
                        </View>
                    </View>
                ))}

            </ScrollView>
        </View>
    )
}

export default TransactionsView;