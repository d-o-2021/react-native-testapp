import React, { Component } from "react";
import { Text,Modal, View, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { Checkbox } from "react-native-paper";

class Modall extends Component{
    constructor(props){
        super(props)
        this.state={
            checked:false
        }
    }
    render(){
        const {modalRef,allScreens,navigationRef}=this.props
        const screenList = Object.keys(allScreens);
        return(
        <GestureHandlerRootView style={{height:0}}>
        <Modalize ref={modalRef} modalStyle={{height:20,maxHeight:29}} modalHeight={200} closeOnOverlayTap={true} panGestureEnabled={true}>
            {screenList.map((item)=>
            <View key={item}>
                <Checkbox status={this.state.checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        this.setState({checked : !this.state.checked});
                    }}>
                </Checkbox>
                <TouchableOpacity  onPress={()=>{
                    navigationRef.current?.navigate(item)
                    modalRef.current.close();
                }}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            </View>
            )}
        </Modalize>
        </GestureHandlerRootView>
        )
    }
}

export default Modall;