import { StyleSheet, View, Text, Button } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import InfoScreen from './InfoScreen';
import ReservationScreen from './ReservationScreen';
import ContactScreen from './ContactScreen.js';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator 
            drawerContent={props => <CustomDrawer {...props} />} 
            initialRouteName='Home' 
            // Ask Why these screen options are not being applied / and how to edit header
            screenOptions={{
                headerShown: true, 
                drawerActiveBackgroundColor: '#b8c5d1',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#3333',
                drawerLabelStyle: {
                    marginLeft: -50,
                    fontSize: 20
                }
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name='home' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                drawerIcon: ({color}) => (
                    <FontAwesome5 name='user' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Information" component={InfoScreen} options={{
                drawerIcon: ({color}) => (
                    <FontAwesome5 name='info-circle' size={22} color={color} />
                )
            }}/>
            <Drawer.Screen name="Reservation" component={ReservationScreen} options={{
                drawerIcon: ({color}) => (
                    <FontAwesome5 name='calendar-check' size={22} color={color} />
                )
            }}/>
            <Drawer.Screen name="Contact" component={ContactScreen} options={{
                drawerIcon: ({color}) => (
                    <FontAwesome5 name='envelope-open-text' size={22} color={color} />
                )
            }}/>
        </Drawer.Navigator>
    )
}

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

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

export default Main;