import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component } from "react";
import React from 'react'
import {Text, View} from 'react-native'
import Debit1 from "./debitScreens/Debit1";
import Debit2 from "./debitScreens/Debit2";
class DebitNote extends Component{
    render(){
        const SubStack =createNativeStackNavigator();
        return(
            <SubStack.Navigator screenOptions={{headerShown:false}}>
                <SubStack.Screen name='Debit1' component={Debit1} ></SubStack.Screen>
                <SubStack.Screen name='Debit2' component={Debit2} ></SubStack.Screen>
            </SubStack.Navigator>
        )
    }
}

export default DebitNote;