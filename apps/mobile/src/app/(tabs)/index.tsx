import React, {useState} from "react";
import {View, Text, TouchableOpacity, Image, Platform, ScrollView} from "react-native";
import ScreenLayout from "../../layouts/ScreenLayout";
import TransferView from "../../features/dashboard/views/TransferView";
import TransactionsView from "../../features/dashboard/views/TransactionsView";
import MyBalanceView from "../../features/dashboard/views/MyBalanceView";
import UpcomingBillsView from "../../features/dashboard/views/UpcomingBillsView";
import {Bell, User, LayoutList, ArrowRightLeft} from "lucide-react-native";
import {COLORS} from "../../theme/colors";
import {SPACING} from "../../theme/spacing";
import {styles} from "../../features/dashboard/styles/dashboardStyles";

const DashboardScreen = () => {
    const [activeTab, setActiveTab] = useState('myBalance');

    const quickActions = [
        {id: 'myBalance', title: 'My Balance'},
        {id: 'upcomingBills', title: 'Upcoming Bills'},
        {id: 'transactions', title: 'Transactions'},
    ];
    const renderActiveView = () => {
        switch (activeTab) {
            case'myBalance':
                return <MyBalanceView/>
            case 'upcomingBills':
                return <UpcomingBillsView/>;
            case 'transactions':
                return <TransactionsView/>;
        }
    }
    return (
        <ScreenLayout scrollable={false}>
            <View style={styles.header}>
                {/*Buttons*/}
                <View style={styles.headerButtonContainer}>
                    <TouchableOpacity style={styles.circleButton}>
                        <Bell size={30} color={COLORS.textSecondary}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circleButtonDisabled}>
                        <LayoutList size={30} color={COLORS.textSecondary}/>
                    </TouchableOpacity>
                </View>
                {/*Profile*/}
                <View style={styles.headerProfileContainer}>
                    <TouchableOpacity style={styles.circleButton}>
                        <User size={30} color={COLORS.textSecondary}/>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            color: COLORS.textSecondary,
                            fontSize: SPACING.lg,
                        }}>
                            Hello,
                        </Text>
                        <Text style={{
                            color: COLORS.white,
                            fontSize: SPACING.xl,
                            fontWeight: '600'
                        }}>
                            HomiesLab
                        </Text>

                    </View>
                </View>

            </View>

            <View style={{
                // flex: 1,
                flexDirection: 'row',
                gap: 10
            }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalScrollContent}
                >
                    {quickActions.map((action) => {
                        const isActive = activeTab === action.id;
                        return (
                            <TouchableOpacity style={styles.quickActionButton} key={action.id}
                                              onPress={() => setActiveTab(action.id)}>
                                <Text
                                    style={isActive ? styles.activeQuickActionButtonText : styles.quickActionButtonText}>
                                    {action.title}
                                </Text>
                            </TouchableOpacity>

                        )
                    })}

                </ScrollView>

            </View>
            <View style={styles.mainViewContainer}>
                {renderActiveView()}
            </View>
        </ScreenLayout>
    )
}

export default DashboardScreen;