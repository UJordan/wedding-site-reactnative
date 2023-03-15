import { View, StyleSheet, ScrollView, Image, Text, Dimensions, FlatList, Animated } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from '../components/carousel';

const InfoScreen = () => {

    return (
      <ScrollView>
        <LinearGradient 
            colors={['#b8c5d1', 'white', '#b8c5d1']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
        <View style={styles.container}>
          <View style={styles.ceremony}>
            <Text style={{fontSize: 20}}>Ceremony & Celebration</Text>
            <View style={styles.secondaryContainer}>
              <FontAwesome5 name='calendar-check' size={30} />
              <Text>Our Wedding Day</Text>
              <Text styles={styles.information}>Please join us on September 10, 2023 to celebrate our special day</Text>
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
        </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ceremony: {
      alignItems: 'center',
      paddingTop: 20,
    },
    information: {
      paddingTop: 20,
    },
    secondaryContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 40,
      marginRight: 40
    }
  });

export default InfoScreen;