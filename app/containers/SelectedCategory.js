import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/List';
import Remaining from '../components/Remaining';
import Funding from '../components/Funding';
import { colorOfNumber, date, getCurrentMonthTransactions, toDollarAmount } from '../utils';
import { borderColors, colors } from '../utils/styles';

class TransactionView extends Component {
  constructor() {
    super();

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow({ name, amount }, sectionName, rowId) {
    const { transactionObj } = this.props.category;
    const isLast = transactionObj[sectionName].length - 1 === parseInt(rowId, 10);
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
    const { fundedAmount, transactionObj } = this.props.category;
    const transactions = getCurrentMonthTransactions(transactionObj);
    const transactionTotal = transactions.length > 0 ? transactions.map(transaction => transaction.amount).reduce((prev, next) => prev + next) : 0.00;
    const balance = fundedAmount + transactionTotal;

    return (
      <View style={styles.container}>
        <Funding fundedAmount={fundedAmount} total={transactionTotal} />
        <Remaining amount={balance} />
        <List
          dataSource={transactionObj}
          renderHeader={true}
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