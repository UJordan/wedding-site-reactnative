import { StyleSheet, View, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import RsvpButton from '../components/rsvpButton';


const ContactScreen = () => {
    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={{ paddingBottom: 20 }}>We look forward to celebrating with you.</Text>
            <Text>Please feel free to contact us with any questions you may have about the ceremony.</Text>
          </View>
          <View>

            <Input 
              placeholder='First Name'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              // onChangeText={(text) => setUsername(text)}
              // value={username}
              containerStyle={styles.formInput}
              leftIconContainerStyle={styles.formIcon}
            />
            <Input
              placeholder='Last Name'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              // onChangeText={(text) => setPassword(text)}
              // value={password}
              containerStyle={styles.formInput}
              leftIconContainerStyle={styles.formIcon}
            />
            <Input
              placeholder='Phone #'
              leftIcon={{ type: 'font-awesome', name: 'phone' }}
              // onChangeText={(text) => setPassword(text)}
              // value={password}
              containerStyle={styles.formInput}
              leftIconContainerStyle={styles.formIcon}
            />
            <Input
              placeholder='Email'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              // onChangeText={(text) => setPassword(text)}
              // value={password}
              containerStyle={styles.formInput}
              leftIconContainerStyle={styles.formIcon}
            />
            <View>
              <RsvpButton title='Submit'/>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topContainer: {
      alignItems: 'center',
      backgroundColor: '#b8c5d1',
      // marginTop: 20,
      marginBottom: 20,
      paddingTop: 20,
      paddingBottom: 20
    },
    // button: {
    //   backgroundColor: '#b8c5d1',
    //   borderRadius: 10,
    //   paddingVertical: 10,
    //   marginLeft: 20,
    //   marginRight: 20,
    // }
  });

export default ContactScreen;