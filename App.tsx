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
import Purchase from './component/Purchase';
import Accounts from './component/Accounts';
import Modall from './component/Modal';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
class App extends Component {
  modalRef = React.createRef();
  navRef = React.createRef();
  constructor(prop){
    super(prop)
    this.state = {
      screens : {
        'Home':Home,
        'Sales':Sales,
        'Purchase':Purchase,
        'Accounts':Accounts,
      },
      allScreens : {
        'Home':Home,
        'Sales':Sales,
        'Purchase':Purchase,
        'Accounts':Accounts,
        'Credit Note':Home,
        'Debit Note':Home,
        'Receipt':Home,
        'Payment':Home
      },
      openModal:false
    }
  }
  onClick(name:string){
    console.log("param",name);
    
  }
  

  render() {
    const Tab = createBottomTabNavigator();
    console.log("-=-=-=",this.props);
    const screensToShow = Object.keys(this.state.screens)
    return (
      <NavigationContainer ref={this.navRef}>
        <Tab.Navigator>
          {screensToShow.map((item)=>
            <Tab.Screen key={item} name={item} component={this.state.screens[item]}/>
          )
          }
          <Tab.Screen name='new' component={Modall}
            listeners={()=>({
              tabPress: event => {
                event.preventDefault();
                this.modalRef.current.open();
              }
            })}
          />
        </Tab.Navigator>
        <Modall modalRef={this.modalRef} allScreens={this.state.allScreens} navigationRef={this.navRef}/>
      </NavigationContainer>
    );
  }
}

export default App;
