import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './Home';
class profitness extends Component {
    render() {
        return (
          <Navigator
            initialRoute={{ title: 'Home', index: 0 }}
            renderScene={(route, navigator) => { return <Home title={route.title}/> }}
          />
        )
    }
}
AppRegistry.registerComponent('profitness', () => profitness);
