import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';

export default function App() {
  return (
    <NavigationContainer>
      <View style = {styles.container}>
        <Text>App.js</Text>
        {/* <Main /> */}
        <StatusBar style='auto' />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});