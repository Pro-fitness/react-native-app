/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';

import {
  Button,
} from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Home extends Component {
    
    static get defaultProps() {
        return { component: Home };
    }

  constructor(props) {
    super(props);
    this.state = {
      money: 23.56,
      goal: "Run 3 times a week",
      stakes: 10.00
    };
  }

  static get defaultProps() {
      return { title: 'Home' };
  }

  payout() {
      this.setState({
          money: 0,
          goal: this.state.goal,
          stakes: this.state.stakes
      })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.hero}>
          <Icon color='white' name='directions-run' size={62} />
          <Text style={styles.heading}>Profitness</Text>
          <Text style={{color: "white", marginTop: 10}}>It pays to be healthy</Text>
        </View>

        <View>
          <Text style={styles.greenMoney}>${this.state.money}</Text>
          <Button
              small
              buttonStyle={styles.button}
              backgroundColor="#4444ff"
              icon={{name: 'account-balance'}}
              onPress={() => this.payout()}
              title='Payout'
          />
          <Text style={styles.goal}>{this.state.goal}</Text>
          <Text style={styles.welcome}>The stakes are at ${this.state.stakes}</Text>

        </View>

      </ScrollView>
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
  greenMoney: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 20,
      color: 'green'
  },
  redMoney: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 20,
      color: 'red'
  }
});
