import { Component } from "react";
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
class Acc1 extends Component{
    render(){
        const {navigation} = this.props
        return(
            <View style={{width:'100%',height:300,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Acc2');
                }}
            ><Text>Acc1</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Acc3');
                }}
            ><Text>Acc3</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Acc1;