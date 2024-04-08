import { Component } from "react";
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
class Home1 extends Component{
    render(){
        const {navigation} = this.props
        return(
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Home2');
                }}
            ><Text>Home1</Text></TouchableOpacity>
        )
    }
}

export default Home1;