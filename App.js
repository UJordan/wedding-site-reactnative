import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';
// import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <View>
        <StatusBar style='auto' />
      </View>
    </NavigationContainer>
  );
};