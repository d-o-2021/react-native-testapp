import { Component } from "react";
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
class Home2 extends Component{
    render(){
        const {navigation} = this.props
        return(
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Home1');
            }}><Text>Home2</Text></TouchableOpacity>
        )
    }
}

export default Home2;