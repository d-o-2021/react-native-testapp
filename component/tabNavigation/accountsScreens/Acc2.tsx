import { Component } from "react";
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
class Acc2 extends Component{
    render(){
        const {navigation} = this.props
        return(
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Acc1');
                }}
            ><Text>Acc2</Text></TouchableOpacity>
        )
    }
}

export default Acc2;