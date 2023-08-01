import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import AdView from "../screens/Adview";
import SearchWeb from "../screens/SearchWeb";

import { MainStackParamList } from "../types/navigation";

//Stack will receieve a MainStackParamList - Type
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    return (
        <Stack.Navigator>
            {/* Screens shown here */}
            <Stack.Screen name="Home" component={SearchWeb} />
            <Stack.Screen name="SearchWeb" component={AdView} />
            <Stack.Screen name="AdView" component={AdView} />
        </Stack.Navigator>
    )
}

export default MainStack;