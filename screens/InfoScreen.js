import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Button, Icon, Card, ListItem } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
// import { utilPics } from '../shared/projectPhotos';
// import SummitHouseFullerton from '../assets/images/SummitHouseFullerton.jpeg';
import RsvpButton from '../components/rsvpButton';

const InfoScreen = (props) => {
  // const { item } = props;

  // const data = utilPics.map((image, index) => ({
  //   key: String(index),
  //   photo: image.image
  // }));

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
            <Text style={styles.childText}>2000 E Bastanchury Rd, Fullerton, CA 92835</Text>
        <View style={styles.button}>
          <RsvpButton title='RSVP NOW'></RsvpButton>
        </View>
      </Card>
      <Card>
        <Card.Title>Acommodations</Card.Title>
        <Card.Image source={require('../assets/images/hotel.jpeg')}>
        </Card.Image>
        <Text style={styles.parentText}>Places to stay</Text>
            <Text style={styles.childText}>follow the link to book a place nearby</Text>
        <View style={styles.button}>
          <RsvpButton title='Book'></RsvpButton>
        </View>
      </Card>
      <Card>
        <Card.Title>Please check out our registry!</Card.Title>
        <Card.Image source={require('../assets/images/gift.jpeg')}>
        </Card.Image>
        <Text style={styles.parentText}>Click to see our registry</Text>
        <View style={styles.button}>
          <RsvpButton title='Registry'></RsvpButton>
        </View>
      </Card>
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