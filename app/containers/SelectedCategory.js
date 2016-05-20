import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/common/List';
import { colorOfNumber, date } from '../utils';
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
            ${amount.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { category } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.categoryDetailsRow}>
          <View style={styles.categoryDetails}>
            <Text style={styles.categoryDetailsText}>
              {`Funded in ${date.monthName}`.toUpperCase()}
            </Text>

            <Text style={[styles.categoryDetailsText, styles.categoryDetailsAmount]}>
              $100.00
            </Text>
          </View>

          <View style={styles.categoryDetails}>
            <Text style={styles.categoryDetailsText}>
              {`Spent In ${date.monthName}`.toUpperCase()}
            </Text>

            <Text style={[styles.categoryDetailsText, styles.categoryDetailsAmount]}>
              $0.00
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
  categoryDetailsText: {
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