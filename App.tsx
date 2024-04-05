/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Home from './component/Home';
class App extends Component {

  onClick(name:string){
    console.log("param",name);
    
  }

  render() {
    const RootStack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home}/>
        </RootStack.Navigator>
        <View><Text>fasfsadfads</Text></View>
      </NavigationContainer>
    );
  }
}

export default App;
