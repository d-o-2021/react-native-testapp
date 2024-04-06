/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Home from './component/Home';
import Footer from './component/footer/Footer';
import Sales from './component/Sales';
import { navigationRef } from './component/navigationRef';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
class App extends Component {

  constructor(prop){
    super(prop)
    this.state = {
      screens : {
        'Home':Home,
        'Sales':Sales,
        'Purcase':'',
        'Accounts':''
      }
    }
  }
  onClick(name:string){
    console.log("param",name);
    
  }
  

  render() {
    const Tab = createBottomTabNavigator();
    console.log("-=-=-=",this.props);
    const screenss = Object.keys(this.state.screens)
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {screenss.map((item)=>{
            return <Tab.Screen name={item} component={this.state.screens[item]}/>
          })}
          <Tab.Screen name="Modal" component={Home}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
