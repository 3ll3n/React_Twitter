import React from 'react';
import { AppRegistry, View, Image} from 'react-native';

export default class DisplayAnImage extents React.Component {
  render() {
    return (
      <View>
      <Image source={require('./build/res/img/jessie.png')} />
      </View>
      ); 
  }
}

AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);