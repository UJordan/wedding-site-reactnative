import { View, StyleSheet, ScrollView, Image, Text, Linking } from 'react-native';
import { Button, Icon, Card, ListItem } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
// import { utilPics } from '../shared/projectPhotos';
// import SummitHouseFullerton from '../assets/images/SummitHouseFullerton.jpeg';
import RsvpButton from '../components/rsvpButton';

const InfoScreen = ({ navigation }) => {

  const handlePressRsvp = () => {
    navigation.navigate('Reservation', { screen: 'Reservation' })
  };

  return (
    <ScrollView>
      <LinearGradient 
            colors={['#b8c5d1', 'white', '#b8c5d1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
      <Card>
        <Card.Title>Ceremony & Celebration</Card.Title>
        <Card.Image source={require('../assets/images/SummitHouseFullerton.jpeg')}>
        </Card.Image>
        <Text style={styles.parentText}>August 19, 2023</Text>
        <Text style={styles.childText}>5:00 PM - 11:00 PM</Text>
        <Text style={styles.childText}>2000 E Bastanchury Rd, Fullerton, CA 92835</Text>
        <Text style={styles.childText}>Attire: Cocktail</Text>
        <View style={styles.button}>
          <RsvpButton title='RSVP NOW' onPress={handlePressRsvp} />
        </View>
      </Card>
      <Card>
        <Card.Title>Additional Information & FAQs</Card.Title>
        <Card.Image source={require('../assets/images/a20.jpg')}>
        </Card.Image>
        <Text style={styles.parentText}>WHERE SHOULD I PARK?</Text>
        <Text style={styles.childText}>Both the ceremony and reception will be held at the Summit House Restaurant. Summit House offers complimentary valet parking. If you plan on taking advantage of the open bar, we encourage you to Uber/Lyft. Please get home safe!</Text>
        <Text style={styles.parentText}>CAN I BRING A PLUS ONE?</Text>
        <Text style={styles.childText}>You may bring a plus one if your wedding invitation is addressed to you "and Guest," you are allowed a plus one.</Text>
        <Text style={styles.parentText}>ARE KIDS WELCOME?</Text>
        <Text style={styles.childText}>We love your little ones, but we've decided to have an adults-only wedding, with the exception of a few family members. We're excited to celebrate with you and hope you enjoy a parents' night out!</Text>
        <Text style={styles.parentText}>STILL HAVE MORE QUESTIONS?</Text>
        <Text style={styles.childText}>Please feel free to reach out to the bride and groom at ulveswedding@gmail.com.</Text>
      </Card>
      <Card>
        <Card.Title>Acommodations</Card.Title>
        <Card.Image source={require('../assets/images/hotel.jpeg')}>
        </Card.Image>
        <Text style={styles.parentText}>Places to stay & Airports</Text>
        <Text style={styles.childText}>{`John Wayne Airport (SNA) \n Ontario International Airport (ONT) \n Long Beach (LGB) \n Los Angeles International Airport (LAX)`}</Text>
        <Text style={styles.childText}>follow the link to book a place nearby</Text>
        <View style={styles.button}>
          <RsvpButton title='Book' onPress={() => Linking.openURL('https://www.booking.com/')}/>
        </View>
      </Card>
      <View style={{paddingBottom: 10, marginBottom: 10}}>
      <Card>
        <Card.Title>Please check out our registry!</Card.Title>
        <Card.Image source={require('../assets/images/gift.jpeg')}>
        </Card.Image>
        <Text style={styles.parentText}>Click to see our registry</Text>
        <View style={styles.button}>
          <RsvpButton title='Registry' onPress={() => Linking.openURL('https://www.theknot.com/us/cassidy-takeuchi-and-jordan-ulves-aug-2023/registry')}/>
        </View>
      </Card>
      </View>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    parentText: {
      color: 'black',
      textAlign: 'center',
      fontSize: 15,
      marginTop: 10,
    },
    childText: {
      color: 'black',
      textAlign: 'center',
      fontsize: 10,
      marginTop: 10
    },
    button: {
      marginTop: 10,
      // paddingTop: 5
    }
  });

export default InfoScreen;

{/* <LinearGradient 
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
        </LinearGradient> */}