import React, { Component } from 'react';
import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/Budget';

import Button from '../components/common/Button';
import List from '../components/common/List';
import { borderColors, colors } from '../utils/styles';
import { colorOfNumber, createListData, toDollarAmount } from '../utils';

class Budget extends Component {
  constructor() {
    super();

    this.renderRow = this.renderRow.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  renderRow({ name, fundedAmount, transactions }, sectionName, rowId) {
    const { categories } = this.props.budget;
    const category = categories[sectionName];
    const isLast = category.length - 1 === parseInt(rowId, 10);
    const sectionBorder = !isLast ? styles.sectionRowBorder : null;
    const amount = fundedAmount + transactions.map(transaction => transaction.amount).reduce((prev, next) => prev + next);
    const amountColor = colorOfNumber(amount);

    return (
      <TouchableHighlight onPress={() => this.selectCategory(category[rowId])}>
        <View style={[styles.sectionRow, sectionBorder]}>
          <Text style={styles.sectionRowText}>{name}</Text>
          <Text style={[styles.sectionRowText, { color: amountColor }]}>
            {toDollarAmount(amount)}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  selectCategory(category) {
    const { dispatch, navigator } = this.props;
    dispatch(selectCategory(category));
    navigator.push({ title: category.name, name: 'selectedCategory' });
  }

  render() {
    const { budget } = this.props;

    return (
      <View style={styles.container}>
        <List
          dataSource={budget.categories}
          renderRow={this.renderRow}
          renderHeader={true}
        />

        <Button onPress={() => console.log('press')}>
          Add Transaction
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  budget: state.budget
});

export default connect(mapStateToProps)(Budget);