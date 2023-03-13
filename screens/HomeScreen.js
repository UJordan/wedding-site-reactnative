import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import CountdownTimer from '../components/CountdownTimer';
import RsvpButton from '../components/rsvpButton';


const HomeScreen = () => {
    return (
      <ScrollView styles={styles.container}>
        <View >
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/images/CJ1.jpeg')} style={{height: 300, width: 400}}  />
          </View>
          <CountdownTimer />
          <View style={{ paddingTop: 20}}>
            <RsvpButton title='RSVP NOW'></RsvpButton>
          </View>
          <View style={{ paddingTop: 20}}>
            <Text style={styles.textHeader}>Our Story</Text>
            <Text style={{ paddingBottom: 20, marginLeft: 20, marginRight: 20 }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/images/CJ11.jpeg')} style={{height: 600, width: 400, alignContent: 'center'}}/>
          </View>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHeader: {
      fontSize: 30,
      textAlign: 'center',
      paddingBottom: 20,
      textDecorationLine: 'underline'
      // fontWeight: 'bold',
    }
  });

export default HomeScreen;