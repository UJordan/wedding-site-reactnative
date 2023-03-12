import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';


const HomeScreen = () => {
    return (
      <ScrollView styles={styles.container}>
        <View >
          <View>
            <Image source={require('../assets/images/CJ1.jpeg')} style={{height: 300, width: 400}}  />
          </View>
          <View styles={{alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
            <Text>Our Story</Text>
          </View>
            <Button title='RSVP'></Button>
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