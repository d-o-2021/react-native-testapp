import { Component } from "react";
import React = require("react");
import { Text, TouchableOpacity, View } from "react-native";
import { makeStyles } from "./footerStyle";
import * as RootNavigation from '../navigationRef';

class Footer extends Component{
    // navigateToScreen = (screenName: string) => {
    //     this.props.navigation.navigate(screenName);
    //   }
    render(){
        const styles = makeStyles();
        const {screensArr,navigation}= this.props
        console.log("scre",navigation);
        const screensToShow = Object.keys(screensArr)
        return (
            <View style={styles.container}>
                {screensToShow.map((item)=>{
                    console.log(item)
                    
                    return(
                        <TouchableOpacity 
                            key={item}
                            onPress={()=>{navigation.current.navigate(item)}} 
                            style={styles.buttonBox}
                            >
                                <Text>{item}</Text>
                        </TouchableOpacity>
                        )})
                    }
                    <View style={styles.buttonBox}><Text>Modal</Text></View>
            </View>
        );
    }
}

export default Footer;