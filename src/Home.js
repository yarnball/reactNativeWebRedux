import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

import { connect } from 'react-redux'

import { textChangeAction, loadData } from './Redux/actions'

// see https://github.com/necolas/react-native-web

class App extends Component {
  render() {
    console.log("this", this.props)
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to React Native Web </Text>
        </View>
        <Text style={styles.intro}>
          To get started, edit <Text style={styles.code}>src/App/index.js</Text> and save to reload.
        </Text>
        <Text style={styles.code}>You are running on {Platform.OS} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 80
  },
  header: {
    backgroundColor: '#222',
    padding: 20
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  intro: {
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});

const mapStateToProps = state => {
  return {
    titleUpdate: state.titleUpdate
  };
};

// Dispatch
// The thing that cause the action to be done/changed in state (sending payload here as that's the new title)
const mapDispatchToProps = dispatch => {
  return {
    onTextChange: payload => dispatch(textChangeAction(payload)),
    getData: payload => dispatch(loadData(payload))
  };
};

const UpdateTitle = connect(mapStateToProps, mapDispatchToProps)(App);

export default UpdateTitle;