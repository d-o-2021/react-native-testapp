/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {Component} from 'react';
import Home from './component/tabNavigation/Home';
import Footer from './component/footer/Footer';
import Sales from './component/tabNavigation/Sales';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Purchase from './component/tabNavigation/Purchase';
import Accounts from './component/tabNavigation/Accounts';
import Modall from './component/tabNavigation/Modal';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Payment from './component/tabNavigation/Payment';
import CreditNote from './component/tabNavigation/CreditNote';
import DebitNote from './component/tabNavigation/DebitNote';
import Receipt from './component/tabNavigation/Receipt';
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
        'Credit Note':CreditNote,
        'Debit Note':DebitNote,
        'Receipt':Receipt,
        'Payment':Payment
      },
      openModal:false
    }
  }
  onClick(name:string){
    console.log("param",name);
    
  }
  updateScreens = (newScreens) => {
    this.setState({ screens: newScreens });
  }
  

  render() {
    const Tab = createBottomTabNavigator();
    console.log("-=-=-=",this.props);
    const screensToShow = Object.keys(this.state.screens)
    return (
      <GestureHandlerRootView >
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
        <Modall modalRef={this.modalRef} allScreens={this.state.allScreens} navigationRef={this.navRef} screenSetter={this.updateScreens} tabScreens={this.state.screens}/>
      </NavigationContainer>
      </GestureHandlerRootView>
    );
  }
}

export default App;
