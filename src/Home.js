import React, { Component } from "react"
import { StyleSheet, Text, View, Button } from "react-native"

import { connect } from "react-redux"

import { textChangeAction, loadData } from "./Redux/actions"

import { HorizontalExample } from './Components/HorizontalNav'

// see https://github.com/necolas/react-native-web

class App extends Component {
  render() {
    const { apiData, loaded } = this.props.titleUpdate
    const { getData } = this.props
    return (
      <View style={styles.app}>
      <HorizontalExample />
        <Button
          color="#17BF63"
          onPress={() => getData({ id: 123 })}
          title="LOAD data from API"
        />
        {loaded ?  apiData.map((el, indx) => <Text key={indx}>{el.Model_Name}</Text>) : <Text> Waiting for data ... </Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#222",
    padding: 20
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  intro: {
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
})

const mapStateToProps = state => {
  return {
    titleUpdate: state.titleUpdate
  }
}

// Dispatch
// The thing that cause the action to be done/changed in state (sending payload here as that's the new title)
const mapDispatchToProps = dispatch => {
  return {
    onTextChange: payload => dispatch(textChangeAction(payload)),
    getData: payload => dispatch(loadData(payload))
  }
}

const UpdateTitle = connect(mapStateToProps, mapDispatchToProps)(App)

export default UpdateTitle
