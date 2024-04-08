import React, { Component } from "react";
import { Text,Modal, View, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { Checkbox, RadioButton } from "react-native-paper";
import Home from "./Home";
import Sales from "./Sales";
import Purchase from "./Purchase";
import Accounts from "./Accounts";
import Receipt from "./Receipt";
import Payment from "./Payment";
import CreditNote from "./CreditNote";
import DebitNote from "./DebitNote";

class Modall extends Component{
    constructor(props){
        super(props)
        this.state={
            checkedRadio:['Home','Sales'],
            allScreens : {
                'Home':Home,
                'Sales':Sales,
                'Purchase':Purchase,
                'Accounts':Accounts,
                'Credit Note':CreditNote,
                'Debit Note':DebitNote,
                'Receipt':Receipt,
                'Payment':Payment
            }
        }
    }
    handleRadioButtonPress = (value) => {
        const {checkedRadio} = this.state
            const updatedRadio = checkedRadio.splice(1,1);
            updatedRadio.push(value);
            this.setState({checkedRadio:updatedRadio});
      };
    render(){
        const {modalRef,allScreens,navigationRef,screenSetter,tabScreens}=this.props
        const screenList = Object.keys(allScreens);
        
        return(
        
        <Modalize ref={modalRef} modalHeight={340} closeOnOverlayTap={true} panGestureEnabled={true}>
            {screenList.map((item)=>
            <View key={item} style={{flexDirection:'row',alignItems:'center'}}>
                <RadioButton
                    value={item}
                    status={this.state.checkedRadio.includes(item) ? 'checked' : 'unchecked' }
                    onPress={() => this.handleRadioButtonPress(item)}
                />
                {/* <TouchableOpacity  onPress={()=>{
                    navigationRef.current?.navigate(this.state.allScreens?.[item])
                    modalRef.current.close();
                }}> */}
                    <Text>{item}</Text>
                {/* </TouchableOpacity> */}
            </View>
            )}
            <TouchableOpacity style={{borderWidth:2,width:100,height:30,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',marginRight:15}} onPress={()=>{
                console.log("selected",this.state.checkedRadio);
                const selectedScreens = this.state.checkedRadio;
                const onTab=tabScreens
                // let newScreens = {
                //     'Debit Note':DebitNote ,
                //     'Receipt':Receipt
                // };
                console.log("tabupdate",onTab);
                //home, sales, accounts, payment
                // case 1: home, sales
                // case 2: home, Receipt
                // case 3: Credit, Debit
                let newScreens={}
                selectedScreens.forEach((item)=>{
                    newScreens[item]=this.state.allScreens?.[item]
                })
                Object.keys(tabScreens).forEach((item)=>{
                    console.log("item",item);
                    
                    if(Object.keys(newScreens).length< 4 ){
                        newScreens[item] = this.state.allScreens?.[item]
                    }
                })
                console.log("updatedscreens",newScreens);
                
                screenSetter(newScreens);
                modalRef.current.close();
            }}><Text>Done</Text></TouchableOpacity>
        </Modalize>
        )
    }
}

export default Modall;