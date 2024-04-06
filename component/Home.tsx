import { Component, ReactNode } from "react";
import React = require("react");
import { Text, TouchableOpacity, View } from "react-native";

class Home extends Component{
    render(){
        console.log("naviagation",this.props.navigation);
        
        return(
            <TouchableOpacity
            onPress={()=>{}}
            >
            <View>
                <Text>home</Text>
            </View>
            </TouchableOpacity>
        )
        
    }
}

export default Home;