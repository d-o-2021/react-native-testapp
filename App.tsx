/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
class App extends Component {

  onClick(name:string){
    console.log("param",name);
    
  }

  render() {
    return (
      <View>
        <Text>afdfd</Text>
        <TouchableOpacity
          onPress={this.onClick.bind(this,'radhe')}
        >
          <Text>fdafdsfdsf</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
