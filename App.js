// Routing
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { StatusBar } from 'expo-status-bar';

// React native
import { Button, StyleSheet, Text, View } from 'react-native';

// Function Calculator

import ClassCalculator from './src/ClassCalculator';
import FunctionCalculator from './src/FunctionCalculator';

// CREATE
// Create Native Stack
const Stack = createNativeStackNavigator();

//FUNCTION
// 1.YOL   const App = () => { }
// 2.YOL   function App() {}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"      component={HomeScreen}    options={{ title: "Anasayfa" }} />
        <Stack.Screen name="ClassCalculator" component={ClassCalculator} options={{ title: "Class Calculator Alanı" }} />
        <Stack.Screen name="FunctionCalculator" component={FunctionCalculator} options={{ title: "Function Calculator Alanı" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

///////////////////////////////////////
// BUTTON HomeScreen
const HomeScreen = ({ navigation,route }) => {
  return (
    <View>

      {/* Class Calculator */}
      <Button
        title='Calculator Class'
        color="orange"
        onPress={() => navigation.navigate('ClassCalculator', { name: 'Class Component Calculator' })} />


      {/* Function Calculator */}
      <Button
        title='Calculator Function'
        color="blue"
        onPress={() => navigation.navigate('FunctionCalculator', { name: 'Function Component Calculator' })} />

    </View> // common View
  ); //end return 
} //end HomeScreen


// EXPORT
export default App;