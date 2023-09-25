// REACT 
import React, { Component } from 'react'

// REACT NATIVE
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import MyHeader from './MyHeader';

// Class Component
class ClassCalculator extends Component {

  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      inputData1: "",
      inputData2: "",
      result: ""
    }
    // BIND
    this.calculatorSum = this.calculatorSum.bind(this);
    this.calculatorReduce = this.calculatorReduce.bind(this);
    this.calculatorMultiple = this.calculatorMultiple.bind(this);
    this.calculatorDivide = this.calculatorDivide.bind(this);
    this.calculatorMod = this.calculatorMod.bind(this);
  }


  // TOPLAMA
  calculatorSum() {
    const inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(this.state.inputData1);
    inputValue2 = parseFloat(this.state.inputData2);
    resultValue = (inputValue1 + inputValue2);

    // SETSTATE
    this.setState({
      result: resultValue,
    });
  }

  // ÇIKARMA
  calculatorReduce() {
    const inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(this.state.inputData1);
    inputValue2 = parseFloat(this.state.inputData2);
    resultValue = (inputValue1 - inputValue2);

    // SETSTATE
    this.setState({
      result: resultValue,
    });
  }

  // ÇARMA
  calculatorMultiple() {
    const inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(this.state.inputData1);
    inputValue2 = parseFloat(this.state.inputData2);
    resultValue = (inputValue1 * inputValue2);

    // SETSTATE
    this.setState({
      result: resultValue,
    })
  }

  // BÖLME
  calculatorDivide() {
    const inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(this.state.inputData1);
    inputValue2 = parseFloat(this.state.inputData2);
    resultValue=(inputValue1/inputValue2);

    // SETSTATE
    this.setState({
      result: resultValue,
    });
   }

  // KALAN
  calculatorMod() {
      const inputValue1 = 0, inputValue2 = 0, resultValue = 0;
      inputValue1 = parseFloat(this.state.inputData1);
      inputValue2 = parseFloat(this.state.inputData2);
      resultValue =(inputValue1%inputValue2);

      // SETSTATE
      this.setState({
        result:resultValue,
      })
  }


  // RENDER
  render() {

    // RETURN
    return (
      <View style={styles.container}>
        <Text>Merhabalar</Text>
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

// EXPORT
export default ClassCalculator