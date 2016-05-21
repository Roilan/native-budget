import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/common/List';
import { colorOfNumber, date, toDollarAmount } from '../utils';
import { borderColors, colors } from '../utils/styles';

class TransactionView extends Component {
  constructor() {
    super();

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow({ name, amount }, sectionName, rowId) {
    const { category } = this.props;
    const isLast = category.transactions.length - 1 === parseInt(rowId, 10);
    const sectionBorder = !isLast ? styles.sectionRowBorder : null;
    const amountColor = colorOfNumber(amount);

    return (
      <View>
        <View style={[styles.sectionRow, sectionBorder]}>
          <Text style={styles.sectionRowText}>{name}</Text>
          <Text style={[styles.sectionRowText, { color: amountColor }]}>
            {toDollarAmount(amount)}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { category } = this.props;
    const transactionTotal = category.transactions.length > 0 ? category.transactions.map(transaction => transaction.amount).reduce((prev, next) => prev + next) : 0.00;

    return (
      <View style={styles.container}>
        <View style={styles.categoryDetailsRow}>
          <View style={styles.categoryDetails}>
            <Text style={styles.categoryText}>
              {`Funded in ${date.monthName}`.toUpperCase()}
            </Text>

            <Text style={[styles.categoryText, styles.categoryDetailsAmount, { color: colorOfNumber(category.fundedAmount) }]}>
              {toDollarAmount(category.fundedAmount)}
            </Text>
          </View>

          <View style={styles.categoryDetails}>
            <Text style={styles.categoryText}>
              {`Spent In ${date.monthName}`.toUpperCase()}
            </Text>

            <Text style={[styles.categoryText, styles.categoryDetailsAmount, { color: colorOfNumber(transactionTotal) }]}>
              {toDollarAmount(transactionTotal)}
            </Text>
          </View>
        </View>

        <List
          dataSource={category.transactions}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
  sectionRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  },
  sectionRowBorder: {
    borderColor: borderColors.gray,
    borderBottomWidth: 1.5
  },
  sectionRowText: {
    fontSize: 18
  }
});

const mapStateToProps = (state) => ({
  category: state.budget.selectedCategory
});

export default connect(mapStateToProps)(TransactionView);