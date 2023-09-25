// REACT 
import React, { Component } from 'react'

// REACT NATIVE
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

// Header
import CalculatorHeader from './CalculatorHeader';

// Class Component
class ClassCalculator extends Component {

  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      inputData1: "",
      inputData2: "",
      result: "",
      date: "25/09/2023",
    }
    // BIND
    this.calculatorSum = this.calculatorSum.bind(this);
    this.calculatorReduce = this.calculatorReduce.bind(this);
    this.calculatorMultiple = this.calculatorMultiple.bind(this);
    this.calculatorDivide = this.calculatorDivide.bind(this);
    this.calculatorMod = this.calculatorMod.bind(this);
    this.nowDate = this.nowDate.bind(this);
  }

  // TOPLAMA
  calculatorSum() {
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
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
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
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
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
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
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(this.state.inputData1);
    inputValue2 = parseFloat(this.state.inputData2);
    resultValue = (inputValue1 / inputValue2);

    // SETSTATE
    this.setState({
      result: resultValue,
    });
  }

  // KALAN
  calculatorMod() {
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(this.state.inputData1);
    inputValue2 = parseFloat(this.state.inputData2);
    resultValue = (inputValue1 % inputValue2);

    // SETSTATE
    this.setState({
      result: resultValue,
    })
  }

  // Şimdiki tarihi göster
  nowDate() {
    const date = new Date().getDate();
    // SetState
  }

  // RENDER
  render() {

    // RETURN
    return (
      <View style={styles.container}>
        {/*Dikkat: birden fazla Component import ediyorsanız View içinde eklemeyi unutmayınız.*/}
        {/* other Component import */}
        <CalculatorHeader headerTextData="Hesap Makine Uygulaması" appVersion="version-1" nowDateData={this.state.date} />

        <View style={styles.calculatorContainer}>
          {/* <Text>Merhabalar</Text> */}

          {/* INPUT-1 */}
          <TextInput
            style={styles.calculatorInput}
            placeholder='Hesap uygulama alanı 1'
            value={this.state.inputData1}
            onChangeText={(data) => {
              this.setState({
                inputData1: data,
              })
            }}
          />

          {/* INPUT-2 */}
          <TextInput
            style={styles.calculatorInput}
            placeholder='Hesap uygulama alanı 2'
            value={this.state.inputData2}
            onChangeText={(data) => {
              this.setState({
                inputData2: data,
              })
            }}
          />
        </View>

        {/* BUTTON */}
        <View style={styles.calculatorButton}>
          {/* TOPLAMA */}
          <Button
            onPress={this.calculatorSum}
            color="blue"
            title="+" />

          {/* ÇIKARMA */}
          <Button
            onPress={this.calculatorReduce}
            color="blue"
            title="-" />

          {/* ÇARPMA */}
          <Button
            onPress={this.calculatorMultiple}
            color="red"
            title="*" />

          {/* BÖLME */}
          <Button
            onPress={this.calculatorDivide}
            color="purple"
            title='/'
          />

          {/* KALAN */}
          <Button
            onPress={this.calculatorMod}
            color="purple"
            title="%"
          />
           <Text style={styles.calculatorResultText}>Sonuç: {this.state.result}</Text>
        </View>
      </View>
    ) //end return
  } //end render
} //end class


// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',     // satır düzleminde (X)
    // justifyContent: 'center', // sutun düzleminde (Y)
    // flexDirection: 'column'
    flexDirection:"column",
  },
  calculatorContainer: {
    padding:40,
    flexDirection:"column",
    justifyContent:"center",
    alignItems: 'center',
    
  },
  calculatorButton: {
    borderRadius: 5,
    margin:10,
  },
  calculatorInput: {
    height:50,
    backgroundColor:"white",
    color:"blue",
    width:380,
    margin:10,
    padding:10
  },
  calculatorResultText:{
    color:"black",
    fontSize:20,
    fontWeight:"bold",
    marginTop:30
  }

});

// EXPORT
export default ClassCalculator