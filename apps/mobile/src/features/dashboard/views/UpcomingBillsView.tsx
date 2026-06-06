import {View, Text, TouchableOpacity, ScrollView, Image} from "react-native";
import styles from "../styles/UpcomingBillsViewStyles";
import globalStyles from "../styles/globalStyles";
import {Ellipsis} from "lucide-react-native";
import {COLORS} from "../../../theme/colors";
import {SPACING} from "../../../theme/spacing";
import Label from "../../../components/typography/Label";
import Avatar from "../../../components/image/Avatar";
// import SwipeButton from "../../../components/button";
import SwipeButton from "../../../components/button/SwipeButton";
const UpcomingBillsView = () => {
    const bills = [
        {
            title: 'Adobe XD',
            avatar: require('../../../../assets/images/adobe-xd.png'),
            price: '$278.62',
            date: 'Aug 19,2025',
            dueDate: '1 Month',
            type: 'Subscriptions'
        },
        {
            title: 'Netflix',
            avatar: require('../../../../assets/images/Netflix-new-icon.png'),
            price: '$40',
            date: 'Aug 22,2025',
            dueDate: '1 Month',
            type: 'Subscriptions'
        },
    ]

    return (
        <View>
            <View style={globalStyles.headerContainer}>
                <Label color={COLORS.white} alignItems={"flex-start"} fontSize={SPACING.xxxl} fontWeight={"bold"}>
                    Upcoming Bills
                </Label>
                <TouchableOpacity style={styles.circleButton}>
                    <Ellipsis size={SPACING.xxl} color={COLORS.white}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.billCardScrollView}>
                {bills.map((bill, index) => (
                    <View key={index} style={styles.billCardContainer}>
                        <View style={styles.billCardHeader}>
                            <View style={styles.billCardHeaderItem}>
                                <Text style={styles.billCardHeaderItemTitle}>
                                    {bill.title}
                                </Text>
                                <Avatar source={bill.avatar} radius={"xxxl"}
                                        size={"xxxl"}
                                        resizeMode={"cover"} border={"xxl"}/>
                            </View>
                            <Label type={'simple'} fontSize={SPACING.lg} borderRadius={SPACING.xl} padding={SPACING.sm}>
                                {bill.dueDate}
                            </Label>
                        </View>
                        <View style={styles.billCardBodyItemContainer}>
                            <View>
                                <Text style={styles.billCardBodyLabel}>
                                    Price
                                </Text>
                                <Text style={styles.billCardBodyPriceText}>
                                    {bill.price}
                                </Text>
                            </View>
                            <View style={styles.billCardBodyRow2}>
                                <Text style={styles.billCardBodyLabel}>
                                    {bill.date}
                                </Text>
                                <Text style={styles.billCardBodyLabel}>
                                    {bill.type}
                                </Text>
                            </View>
                            <View style={styles.backCardContainer}>
                                <View style={styles.billCardBodyRow3}>
                                    <View style={styles.billCardHeader}>
                                        <View style={styles.billCardHeaderItem}>
                                            <Text style={styles.billCardBodyRow3HeaderTitle}>
                                                {bill.title}
                                            </Text>
                                            <Avatar source={bill.avatar}
                                                    radius={"xxxl"}
                                                    size={"xxxl"}
                                                    resizeMode={"cover"} border={"xxl"}/>
                                        </View>
                                        <Label type={'simple'} fontSize={SPACING.lg} borderRadius={SPACING.xl} padding={SPACING.sm}>
                                            {bill.dueDate}
                                        </Label>
                                    </View>
                                    <View>
                                        <Text style={styles.billCardBodyLabel}>
                                            Price
                                        </Text>
                                        <Text style={styles.billCardBodyPriceTextRow3}>
                                            {bill.price}
                                        </Text>
                                    </View>
                                    <View style={styles.billCardBodyRow2}>
                                        <Text style={styles.billCardBodyLabel}>
                                            {bill.date}
                                        </Text>
                                        <Text style={styles.billCardBodyLabel}>
                                            {bill.type}
                                        </Text>
                                    </View>
                                    <SwipeButton text={"Pay Now"} successText={"Payment Completed"}/>

                                </View>
                            </View>

                        </View>
                    </View>
                ))}

            </ScrollView>
        </View>

    )
}

export default UpcomingBillsView;