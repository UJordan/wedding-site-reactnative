import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import CountdownTimer from '../components/CountdownTimer';
import RsvpButton from '../components/rsvpButton';


const HomeScreen = () => {
    return (
      <ScrollView styles={styles.container}>
        <View >
          <View>
            <Image source={require('../assets/images/CJ1.jpeg')} style={{height: 300, width: 400}}  />
          </View>
          <CountdownTimer />
          <RsvpButton style={{}} title='RSVP NOW'></RsvpButton>
          <View style={{ paddingTop: 30, }}>
            <Text style={{ fontSize: 20 }}>Our Story</Text>
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
  });

export default HomeScreen;