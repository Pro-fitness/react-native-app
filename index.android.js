import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Scenes from './Scenes';



class profitness extends Component {
    render() {
        // return (<Home/>);
        const routeStack = [
            {component: Login},
            {component: Signup},
            {component: Home}
        ]
        return (
          <Navigator
            initialRoute={routeStack[0]}
            initialRouteStack={routeStack}
            renderScene={(route, navigator) => { return <Scenes

                    component={route.component}

                    onSignUp = { () => {
                        navigator.push(routeStack[1]);
                    }}

                    onLogIn = { () => {
                        navigator.pop();
                    }}

                    loginSuccess = { () => {
                        navigator.push(routeStack[2]);
                    }}
                /> }}
          />
        )
    }
}
AppRegistry.registerComponent('profitness', () => profitness);
