import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/common/List';
import { borderColors } from '../utils/styles';

class TransactionView extends Component {
  constructor() {
    super();

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow() {

    return (
      <Text>Something</Text>
    )
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