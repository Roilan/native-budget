import React, { Component, PropTypes } from 'react';
import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../../Utils/styles';
import { createListData } from '../../Utils';

export default class List extends Component {
  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.setDataSource = this.setDataSource.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
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

  setDataSource(data) {
    const listData = createListData(data);
    return this.ds.cloneWithRowsAndSections(listData);
  }

  render() {
    const { dataSource, renderRow } = this.props;

    return (
      <ListView
        dataSource={this.setDataSource(dataSource)}
        renderRow={renderRow}
        renderSectionHeader={this.renderSectionHeader}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
});

List.propTypes = {
  dataSource: PropTypes.object.isRequired
}