import React, { Component } from 'react';
import { Navigator, StyleSheet, View } from 'react-native';
import Header from './Components/Common/Header';
import Landing from './Components/Landing';
import Budget from './Containers/Budget';

const ROUTES = {
  landing: Landing,
  budget: Budget,

  initial: 'budget'
};

export default class App extends Component {
  constructor() {
    super();

    this.renderRoute = this.renderRoute.bind(this);
  }

  renderRoute(route, navigator) {
    const Component = ROUTES[route.name];

    return (
      <View style={styles.container}>
        <Header />
        <Component route={route} navigator={navigator} />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        initialRoute={{name: ROUTES.initial}}
        renderScene={this.renderRoute}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});