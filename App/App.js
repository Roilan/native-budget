import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Budget from './containers/Budget';
import SelectedCategory from './containers/SelectedCategory';
import { colors } from './utils/styles';

const ROUTES = {
  budget: Budget,
  selectedCategory: SelectedCategory,

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
      <View style={styles.routeContainer}>
        <Component route={route} navigator={navigator} />
      </View>
    );
  }

  render() {
    const routeMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if (index === 0) return;
        const previousRoute = navState.routeStack[index - 1];

        return (
          <TouchableOpacity onPress={() => navigator.pop()}>
            <Text style={[styles.navBarText, styles.navBarLeftButton]}>{'<'}</Text>
          </TouchableOpacity>
        )
      },
      RightButton: (route, navigator, index, navState) => {
        if (route.rightElement) {
          return route.rightElement
        }
      },
      Title: (route, navigator, index, navState) => {
        return (
          <Text style={styles.navBarText}>
            ezbudget
          </Text>
        )
      }
    }

    const Navbar = (
      <Navigator.NavigationBar
        routeMapper={routeMapper}
        style={styles.navBar}
      />
    );

    return (
      <Navigator
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        initialRoute={{name: ROUTES.initial}}
        navigationBar={Navbar}
        renderScene={this.renderRoute}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  routeContainer: {
    flex: 1,
    marginTop: 64
  },
  navBar: {
    backgroundColor: colors.lightBlue,
  },
  navBarText: {
    color: 'white',
    fontSize: 22,
    marginVertical: 5
  },
  navBarLeftButton: {
    //borderColor: 'red',
    //borderWidth: 2,
    fontSize: 25,
    marginVertical: 2,
    paddingLeft: 20,
    paddingRight: 20
  },
  navBarRightButton: {
    paddingRight: 10,
  },
});