import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../Utils/styles';

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  };

  render() {
    const { children, onPress } = this.props;

    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600'
  }
});