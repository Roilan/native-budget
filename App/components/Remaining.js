import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { colorOfNumber, toDollarAmount } from '../utils';
import { colors } from '../utils/styles';

export default ({ amount }) => (
  <View style={[styles.container, { backgroundColor: colorOfNumber(amount) }]}>
    <Text style={[styles.text, styles.remainingText]}>Remaining:</Text>

    <Text style={[styles.text, styles.amountText]}>{toDollarAmount(amount)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: colors.white,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '400'
  },
  remainingText: {
    fontSize: 18,
    marginLeft: 8
  },
  amountText: {
    fontSize: 24,
    marginRight: 7
  }
});
