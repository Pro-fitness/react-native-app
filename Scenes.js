'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

import {
    Button,
} from 'react-native-elements';


import Header from './header';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';


export default class Scenes extends Component {
    constructor(props){
      super(props);

      this.state = {
        loaded: true,
        email: '',
        password: ''
      };
    }

    render() {
        if (this.props.component == Login)
            return (<Login onLogIn = {this.props.onLogIn} onSignUp = {this.props.onSignUp} loginSuccess = {this.props.loginSuccess}/>);
        else if (this.props.component == Signup)
            return (<Signup onLogIn = {this.props.onLogIn} onSignUp = {this.props.onSignUp} loginSuccess = {this.props.loginSuccess}/>);
        else
            return (<Home/>);
    }
}
