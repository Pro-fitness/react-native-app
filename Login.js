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

  login() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebaseApp.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log("LOLOLOLOL " + user);
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log("LOLOLOLOL " + errorMessage);
      });
  }

  render(){
    return (
      <View style={styles.container}>
        <Header text="Login" loaded={this.state.loaded} />
        <View style={styles.body}>
          <Button
              small
              buttonStyle={styles.button}
              backgroundColor="#4444ff"
              icon={{name: 'facebook', type: 'font-awesome'}}
              onPress={() => this.login()}
              title='Login with Facebook'
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
    flex: 1
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
