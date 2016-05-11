import React, { Component } from 'react';
import { Navigator, StyleSheet, View } from 'react-native';
import Landing from './Components/Landing';

const ROUTES = {
  landing: Landing,

  initial: 'landing'
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