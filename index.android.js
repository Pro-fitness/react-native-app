import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './Home';
import Login from './Login';

class profitness extends Component {
    render() {
        return (
          <Navigator
            initialRoute={{ title: 'Home', index: 0 }}
            renderScene={(route, navigator) => { return <Login/> }}
          />
        )
    }
}
AppRegistry.registerComponent('profitness', () => profitness);
