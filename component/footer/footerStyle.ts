import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";

export const makeStyles = ()=> StyleSheet.create({
    container : {
        height:ms(90),
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:ms(10),
        justifyContent:'space-around'
    },
    buttonBox :{
        height:ms(60),
        width:ms(60),
        borderWidth:2
    }
})