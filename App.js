import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

export default class App extends React.Component{


  render() {

    return (
      <AppNavigator/>

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
