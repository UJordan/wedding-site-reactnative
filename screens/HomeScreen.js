import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';
import RsvpButton from '../components/rsvpButton';


const HomeScreen = ({ navigation }) => {

  const handlePressRsvp = () => {
    navigation.navigate('Reservation', { screen: 'Reservation' })
  };

  return (
    <ScrollView styles={styles.container}>
      <View >
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/images/CJ1.jpeg')} style={{height: 300, width: 400}}  />
        </View>
        <CountdownTimer />
        <View style={{ paddingTop: 20, paddingBottom: 20}}>
          <RsvpButton title='RSVP NOW' onPress={handlePressRsvp}></RsvpButton>
        </View>

        <Text style={styles.textHeader}>Our Story</Text>

        <View>
          
          <View style={styles.containerRow}>
            <View style={{justifyContent: 'center' }}>
              <Text style={styles.dates}>SEPTEMBER 22, 2018</Text>
              <Text style={styles.description}>The day we met at the Life is Beautiful music festival in Las Vegas, NV. Although we met in Vegas, we discovered that we actually lived 8 minutes from each other in Orange County!</Text>
            </View>
            <View>
              <Image source={require('../assets/images/firstpicture.jpg')} style={styles.imageStyleRight}  />
            </View>
          </View>


          <View style={styles.containerRow}>
            <View>
              <Image source={require('../assets/images/SF.jpg')} style={styles.imageStyleLeft}  />
            </View>
            <View style={{justifyContent: 'center',}}>
              <Text style={styles.dates}>FEBRUARY 15, 2019</Text>
              <Text style={styles.description}>The first trip we took as a couple! We went to San Francisco for Valentine's Day weekend. We always joke that Jordan has his eyes closed in every photo.</Text>
            </View>
          </View>


          <View style={styles.containerRow}>
            <View style={{justifyContent: 'center' }}>
              <Text style={styles.dates}>SEPTEMBER 22, 2019</Text>
              <Text style={styles.description}>We went back to Life is Beautiful a year later to celebrate our one year of meeting each other!</Text>
            </View>
            <View>
              <Image source={require('../assets/images/vegas.jpg')} style={styles.imageStyleRight} />
            </View>
          </View>


          <View style={styles.containerRow}>
            <View>
              <Image source={require('../assets/images/SF.jpg')} style={styles.imageStyleLeft}  />
            </View>
            <View style={{justifyContent: 'center' }}>
              <Text style={styles.dates}>OCTOBER 31, 2020</Text>
              <Text style={styles.description}>Like many others, we relied on the game Animal Crossing to get us through the pandemic. We felt it was only fitting to dress up as Tom Nook and Isabelle for Halloween!</Text>
            </View>
          </View>


          <View style={styles.containerRow}>
            <View style={{justifyContent: 'center' }}>
              <Text style={styles.dates}>SEPTEMBER 11, 2021</Text>
              <Text style={styles.description}>The day we brought home our lil Obi-Wan. He quickly found his favorite spot in the shelf of our TV stand. He later became TikTok famous for outgrowing his favorite shelf!</Text>
            </View>
            <View>
              <Image source={require('../assets/images/obi.jpg')} style={styles.imageStyleRight}  />
            </View>
          </View>


          <View style={styles.containerRow}>
            <View>
              <Image source={require('../assets/images/CJ3.jpeg')} style={styles.imageStyleLeft}  />
            </View>
            <View style={{justifyContent: 'center' }}>
              <Text style={styles.dates}>JUNE 11, 2022</Text>
              <Text style={styles.description}>The day we got engaged! We had dinner at one of our favorite restaurants, SideDoor in Corona del Mar, and then walked down to the beach after where Jordan proposed.</Text>
            </View>
          </View>


          <View style={styles.containerRow}>
            <View style={{justifyContent: 'center' }}>
            <Text style={styles.dates}>SEPTEMBER 15, 2022</Text>
            <Text style={styles.description}>Our vacation to Kauai, HI. Here's to many more trips in the future! Our next trip will be our honeymoon in Italy.</Text>
            </View>
            <View>
              <Image source={require('../assets/images/hawaii.jpg')} style={styles.imageStyleRight}  />
            </View>
          </View>
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
      paddingBottom: 40,
      textDecorationLine: 'underline',
    },
    containerRow: {
      flexDirection: 'row', 
      marginRight: '50%', 
      marginLeft: '4%', 
      marginBottom: 30,
    },
    dates: {
      fontWeight: 'bold', 
      textAlign: 'center',
    },
    description: {
      textAlign: 'center',
    },
    imageStyleLeft: {
      height: 200, 
      width: 150, 
      borderRadius: 10,
      marginRight: 25
    },
    imageStyleRight: {
      height: 200, 
      width: 150, 
      borderRadius: 10,
      marginLeft: 30
    },
  });

export default HomeScreen;