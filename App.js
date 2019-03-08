import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Image
        source={require('./img/logo.jpg')}
        />
        <Text style={styles.welcome}>RentABook</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },

});
