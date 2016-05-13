import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../Components/Common/Header';
import { colors } from '../../Utils/styles';

class Budget extends Component {
  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.setDataSource = this.setDataSource.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
  }

  setDataSource(categories) {
    let dataBlob = {};
    Object.keys(categories).forEach((sectionName) => {
      let category = categories[sectionName];
      dataBlob[sectionName] = category;
    });

    return this.ds.cloneWithRowsAndSections(dataBlob);
  }

  renderRow({ name }, sectionName, rowId) {
    const { categories } = this.props.budget;
    const isLast = categories[sectionName].length - 1 === parseInt(rowId, 10);
    const sectionBorder = !isLast ? styles.sectionRowBorder : null;

    return (
      <View style={[styles.sectionRow, sectionBorder]}>
        <Text style={styles.sectionRowText}>{name}</Text>
      </View>
    );
  }

  renderSectionHeader(sectionData, sectionId) {
    const capitalSectionText = sectionId.toUpperCase();

    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          {capitalSectionText}
        </Text>
      </View>
    );
  }

  render() {
    const { budget } = this.props;

    return (
      <View style={styles.container}>
        <Header />

        <ListView
          dataSource={this.setDataSource(budget.categories)}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
          style={styles.container}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: colors.fontBlue,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10
  },
  sectionHeaderText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  sectionRow: {
    padding: 10
  },
  sectionRowBorder: {
    borderColor: 'rgba(153, 148, 148, 0.32)',
    borderBottomWidth: 1
  },
  sectionRowText: {
    fontSize: 18
  }
});

const mapStateToProps = (state) => ({
  budget: state.budget
});

export default connect(mapStateToProps)(Budget);