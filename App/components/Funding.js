import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colorOfNumber, date, toDollarAmount } from '../utils'
import { colors } from '../utils/styles';

export default ({ fundedAmount, total }) => (
  <View style={styles.categoryDetailsRow}>
    <View style={styles.categoryDetails}>
      <Text style={styles.categoryText}>
        {`Funded in ${date.monthName}`.toUpperCase()}
      </Text>

      <Text style={[styles.categoryText, styles.categoryDetailsAmount, { color: colorOfNumber(fundedAmount) }]}>
        {toDollarAmount(fundedAmount)}
      </Text>
    </View>

    <View style={styles.categoryDetails}>
      <Text style={styles.categoryText}>
        {`Spent In ${date.monthName}`.toUpperCase()}
      </Text>

      <Text style={[styles.categoryText, styles.categoryDetailsAmount, { color: colorOfNumber(total) }]}>
        {toDollarAmount(total)}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  categoryDetailsRow: {
    backgroundColor: '#0B1D26',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  categoryDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  categoryText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
  categoryDetailsAmount: {
    paddingTop: 2
  },
});