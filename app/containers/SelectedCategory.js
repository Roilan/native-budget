import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/common/List';
import { colorOfNumber } from '../utils';
import { borderColors } from '../utils/styles';

class TransactionView extends Component {
  constructor() {
    super();

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow({ name, amount }, sectionName, rowId) {
    const { category } = this.props;
    const isLast = category[sectionName].length - 1 === parseInt(rowId, 10);
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
      <List
        dataSource={category}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
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