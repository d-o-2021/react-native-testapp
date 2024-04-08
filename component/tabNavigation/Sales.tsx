import { useNavigation } from "@react-navigation/native";
import { Component, ReactNode } from "react";
import React = require("react");
import { Text, TouchableOpacity, View } from "react-native";

class Sales extends Component{
    render(){
        const {navigation} = this.props
        // const navigation = useNavigation();
        return(
            <TouchableOpacity>
            <View>
                <Text>saless</Text>
            </View>
            </TouchableOpacity>
        )
        
    }
}

export default Sales;