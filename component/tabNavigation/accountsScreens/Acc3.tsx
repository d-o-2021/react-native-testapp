import { Component } from "react";
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
class Acc3 extends Component{
    render(){
        const {navigation} = this.props
        return(
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Acc2');
                }}
            ><Text>Acc3</Text></TouchableOpacity>
        )
    }
}

export default Acc3;