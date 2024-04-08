import { Component } from "react";
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
class Debit2 extends Component{
    render(){
        const {navigation} = this.props
        return(
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Debit1');
                }}
            ><Text>debit2</Text></TouchableOpacity>
        )
    }
}

export default Debit2;