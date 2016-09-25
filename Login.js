'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';

import {
    Button,
} from 'react-native-elements';

import Header from './header';
import Signup from './Signup';


import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAXsV5ZyCFkZLLA7PJvbGTxCQ3ok3y39Gk",
    authDomain: "profitness-9e6a9.firebaseapp.com",
    databaseURL: "https://profitness-9e6a9.firebaseio.com",
    storageBucket: "profitness-9e6a9.appspot.com",
    messagingSenderId: "125016110061"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      loaded: true
    }
  }

  login(){
      this.setState({
        loaded: false
      });

      firebaseApp.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
      .catch(function(error) {
          alert('Login Failed. Please try again' + error.message);
      });

      this.setState({
          loaded: true
      });

      if (firebaseApp.auth().currentUser != null) {
          alert("Login successful!");
          this.props.navigator.push({id: "Home"});
      }
  }

  goToSignUpPage() {
      this.props.navigator.push({id: "Signup"});
  }

  render(){
    return (
      <View style={styles.container}>
        <Header text="Login" loaded={this.state.loaded} />
        <View style={styles.body}>
        <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />
          <Button
              small
              buttonStyle={styles.button}
              backgroundColor="#4444ff"
              onPress={() => this.login()}
              title='Login'
          />
          <Button
              small
              buttonStyle={styles.button}
              backgroundColor="#4444ff"
              onPress={() => this.goToSignUpPage()}
              title='Create a new account'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    color: "#4444ff",
    marginTop: 10,
  },
  goal: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: "#4444ff",
},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    flex: 1,
    marginBottom: 20
  },
  hero: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4444ff'
  },
  heading: {
    color: 'white',
    fontSize: 30
  },
});
