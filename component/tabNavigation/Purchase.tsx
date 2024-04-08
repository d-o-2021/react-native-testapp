import { useNavigation } from "@react-navigation/native";
import { Component, ReactNode } from "react";
import React = require("react");
import { Text, TouchableOpacity, View } from "react-native";

class Purchase extends Component{
    render(){
        // const {navigation} = this.props
        // const navigation = useNavigation();
        return(
            <TouchableOpacity
            // onPress={()=>{
            //     navigation.replace('Home');
            // }}
            >
            <View>
                <Text>Purchase</Text>
            </View>
            </TouchableOpacity>
        )
        
    }
}

export default Purchase;