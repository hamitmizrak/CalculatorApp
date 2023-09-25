import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// CLASS COMPONENT
export default class CalculatorHeader extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
    }
    // BIND
  }

  // RENDER
  render() {
    // destructing object
    const {headerTextData,appVersion,nowDateData}=this.props

    // RETURN
    return (
      <View style={styles.container}>
        {/* {this.props.headerTextData} */}
        <Text>{headerTextData} # {appVersion}</Text>
        <Text>{nowDateData}</Text>
        </View>
    )
  }
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',     // satır düzleminde (X)
     justifyContent: 'center', // sutun düzleminde (Y)
     flexDirection: 'column'
  },
});

