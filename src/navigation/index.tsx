import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./type"
import Home from "../screen/home";


const Stack = createNativeStackNavigator<RootStackParamList>() ;

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}> 
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export default Navigation