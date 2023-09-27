// USE STATE
import React, { useState } from 'react'

// BUTTON, TEXTiTEXTINPUT
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import CalculatorHeader from './CalculatorHeader';

// FUNCTION
function FunctionCalculator() {

  // STATE
  const [inputData1, setInputData1] = useState(null);
  const [inputData2, setInputData2] = useState("");
  const [result, setResult] = useState([]);
  const [allResult, setAllResult] = useState([]);
  const [date, setDate] = useState(new Date().getFullYear());


  // TOPLAMA
  calculatorSum = () => {
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(inputData1);
    inputValue2 = parseFloat(inputData2);
    resultValue = (inputValue1 + inputValue2);

    // SETSTATE
    setResult(resultValue)
    setAllResult([resultValue + " ", ...allResult])
  }

  // ÇIKARMA
  calculatorReduce = () => {
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(inputData1);
    inputValue2 = parseFloat(inputData2);
    resultValue = (inputValue1 - inputValue2);

    // SETSTATE
    setResult(resultValue)
    setAllResult([resultValue + " ", ...allResult])
  }

  // ÇARMA
  calculatorMultiple = () => {
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(inputData1);
    inputValue2 = parseFloat(inputData2);
    resultValue = (inputValue1 * inputValue2);

    // SETSTATE
    setResult(resultValue)
    setAllResult([resultValue + " ", ...allResult])
  }

  // BÖLME
  calculatorDivide = () => {
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(inputData1);
    inputValue2 = parseFloat(inputData2);
    resultValue = (inputValue1 / inputValue2);

    // SETSTATE
    setResult(resultValue)
    setAllResult([resultValue + " ", ...allResult])
  }

  // KALAN
  calculatorMod = () => {
    let inputValue1 = 0, inputValue2 = 0, resultValue = 0;
    inputValue1 = parseFloat(inputData1);
    inputValue2 = parseFloat(inputData2);
    resultValue = (inputValue1 % inputValue2);

    // SETSTATE
    setResult(resultValue)
    setAllResult([resultValue + " ", ...allResult])
  }

  // FUNCTION
  // Şimdiki tarihi göster
  nowDate = () => {
    // const temp=new Date().getDate()+" / "+(new Date().getMonth()+1)+" / "+new Date().getFullYear();
    const temp = `${new Date().getDate()} / ${(new Date().getMonth() + 1)} / ${new Date().getFullYear()}  `;

    //SET STATE
    setDate(temp)
  }

  // RETURN
  return (
    <View style={styles.container}>
      {/*Dikkat: birden fazla Component import ediyorsanız View içinde eklemeyi unutmayınız.*/}
      {/* other Component import */}
      <CalculatorHeader
        headerTextData="Hesap Makine Uygulaması"
        appVersion="version-1"
        nowDateData={date}
      />

      <View style={styles.calculatorContainer}>
        {/* <Text>Merhabalar</Text> */}

        {/* INPUT-1 */}
        <TextInput
          style={styles.calculatorInput}
          placeholder='Hesap uygulama alanı 1'
          value={inputData1}
          onChangeText={(data) => {
            setInputData1(data)
          }}
        />

        {/* INPUT-2 */}
        <TextInput
          style={styles.calculatorInput}
          placeholder='Hesap uygulama alanı 2'
          value={inputData2}
          onChangeText={(data) => {
            setInputData2(data)
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
        <Text style={styles.calculatorResultText}>Sonuç: {result}</Text>
        <Text style={styles.calculatorResultText}>Hepsi (ilk): {allResult} </Text>
        <Text style={styles.calculatorResultText}>Hepsi (son): {allResult.map((item) => <Text>{item}</Text>).reverse()} </Text>
      </View>
    </View>
  ) //end return
}


// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',     // satır düzleminde (X)
    // justifyContent: 'center', // sutun düzleminde (Y)
    // flexDirection: 'column'
    flexDirection: "column",
  },
  calculatorContainer: {
    padding: 25,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
  },
  calculatorButton: {
    borderRadius: 5,
    margin: 5,
  },
  calculatorInput: {
    height: 50,
    backgroundColor: "white",
    color: "blue",
    width: 380,
    margin: 5,
    padding: 5
  },
  calculatorResultText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  }
});

// EXPORT
export default FunctionCalculator