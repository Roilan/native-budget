import React, { Component, PropTypes } from 'react';
import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../../utils/styles';
import { createListData } from '../../utils';

export default class List extends Component {
  constructor() {
    super();

    this.dsWithHeaders = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
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
    const { renderHeader } = this.props;
    let cloneWith;

    if (renderHeader) {
      const listData = createListData(data);
      cloneWith = this.dsWithHeaders.cloneWithRowsAndSections(listData);
    } else {
      cloneWith = this.ds.cloneWithRows(data);
    }

    return cloneWith;
  }

  render() {
    const { dataSource, renderRow, renderHeader } = this.props;

    if (renderHeader) {
      return (
        <ListView
          dataSource={this.setDataSource(dataSource)}
          renderRow={renderRow}
          renderSectionHeader={this.renderSectionHeader}
          style={styles.container}
        />
      );
    }

    return (
      <ListView
        dataSource={this.setDataSource(dataSource)}
        renderRow={renderRow}
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
  dataSource: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  renderRow: PropTypes.func.isRequired
};

List.defaultProps = {
  renderHeader: false
};