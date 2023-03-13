import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const InfoScreen = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.ceremony}>
            <Text>Ceremony & Celebration</Text>
            <View style={styles.secondaryContainer}>
              <FontAwesome5 name='calendar-check' size={30} />
              <Text>Our Wedding Day</Text>
              <Text>Please join us on September 10, 2023 \n to celebrate our special day</Text>
            </View>
            <View style={styles.secondaryContainer}>
            <FontAwesome5 name='map-marked' size={30} />
              <Text>Some Wedding Venue</Text>
              <Text>123 S Wedding Rd, Anaheim, CA 12345</Text>
            </View>
            <View style={styles.secondaryContainer}>
              <Image source={require('../assets/images/SummitHouseFullerton.jpeg')} style={{height: 200, width: 375, borderRadius: 7 }}/>
            </View>
          </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    ceremony: {
      backgroundColor: '#b8c5d1',
      alignItems: 'center',
      paddingTop: 20,
    },
    information: {
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 20
    }
  });

export default InfoScreen;