import { Component } from "react";
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
class Debit1 extends Component{
    render(){
        const {navigation} = this.props
        return(
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Debit2');
                }}
            ><Text>debit1</Text></TouchableOpacity>
        )
    }
}

export default Debit1;