import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: 'orange' }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>
          Splash Screen
        </Text>
      </View>
    );
  }
}
