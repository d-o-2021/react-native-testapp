import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component, ReactNode } from "react";
import React = require("react");
import Acc1 from "./accountsScreens/Acc1";
import Acc2 from "./accountsScreens/Acc2";
import Acc3 from "./accountsScreens/Acc3";

class Accounts extends Component{
    render(){
        const SubStack=createNativeStackNavigator();
        return(
            <SubStack.Navigator screenOptions={{headerShown:false}}>
                <SubStack.Screen name='Acc1' component={Acc1} ></SubStack.Screen>
                <SubStack.Screen name='Acc2' component={Acc2} ></SubStack.Screen>
                <SubStack.Screen name='Acc3' component={Acc3} ></SubStack.Screen>
            </SubStack.Navigator>
        )
        
    }
}

export default Accounts;