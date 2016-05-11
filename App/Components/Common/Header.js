import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../Utils/styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ezbudget</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    paddingTop: 25,
    paddingBottom: 15,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 24
  }
});