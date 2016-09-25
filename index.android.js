import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';



class profitness extends Component {
    render() {
        const routeStack = [
            {id: 'Signup'},
            {id: 'Home'},
            {id: 'Login'},
        ]
        return (
          <Navigator
            initialRoute={{id: 'Login'}}
            renderScene={(route, navigator) => {
                _navigator = navigator;
                switch (route.id) {
                    case 'Login':
                        return (<Login navigator={navigator} />);
                    case 'Signup':
                        return (<Signup navigator={navigator} />);
                    case 'Home':
                        return (<Home navigator={navigator} />);
                }
            }}
          />
        )
    }
}
AppRegistry.registerComponent('profitness', () => profitness);
