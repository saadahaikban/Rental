import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        Add friends here!
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
