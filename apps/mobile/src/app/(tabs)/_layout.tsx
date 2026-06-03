import {Stack} from "expo-router";

const TabLayout = () => {

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="dashboard"/>
        </Stack>
    )
}

export default TabLayout;