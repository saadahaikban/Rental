import React, {Component} from 'react';
import {Platform,Button, StyleSheet, Text, View,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen});

export default createAppContainer(InitialNavigator);
class WelcomeScreen extends React.Component{
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./img/logo.jpg')}/>
        <Text style={styles.welcome}>RentABook</Text>
        <Button title="Let's Start" onPress={() => navigate('SearchBook',{name:'Harry'})} />
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
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },

});
