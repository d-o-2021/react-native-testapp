import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component } from "react";
import React = require("react");
import Home1 from "./homeScreens/Home1";
import Home2 from "./homeScreens/Home2";

class Home extends Component{
    render(){
        console.log("naviagation",this.props.navigation);
        const SubStack = createNativeStackNavigator();
        return(
            <SubStack.Navigator screenOptions={{headerShown:false}}>
                <SubStack.Screen name='Home1' component={Home1} ></SubStack.Screen>
                <SubStack.Screen name='Home2' component={Home2} ></SubStack.Screen>
            </SubStack.Navigator>
        )
        
    }
}

export default Home;