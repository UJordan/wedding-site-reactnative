import { StyleSheet, View, Text, Button } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import InfoScreen from './InfoScreen';
import ReservationScreen from './ReservationScreen';
import ContactScreen from './ContactScreen.js';
import CustomDrawer from '../components/CustomDrawer';

// Page for Navigation

// const screenOptions = {
//     headerTintColor: '#fff',
//     headerStyle: { backgroundColor: '#5637DD'}
// }

// const HomeNavigator = () => {
//     const Stack = createStackNavigator();

//     return (
//         <Stack.Navigator screenOptions={screenOptions}>
//             <Stack.Screen 
//                 name='Home'
//                 component={HomeScreen}
//                 options={{ title: 'Home'}}
//             />
//         </Stack.Navigator>
//     )
// }

// const InfoNavigator = () => {
//     const Stack = createStackNavigator();
//     return (
//         <Stack.Navigator screenOptions={screenOptions}>
//             <Stack.Screen 
//                 name='Info'
//                 component={InfoScreen}
//                 options={{ title: 'Info'}}
//             />
//         </Stack.Navigator>
//     )
// }

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName='Home' screenOptions={{headerShown: true}}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Information" component={InfoScreen} />
                <Drawer.Screen name="Reservation" component={ReservationScreen} />
                <Drawer.Screen name="Contact" component={ContactScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

export default Main;