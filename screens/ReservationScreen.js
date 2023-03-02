import { StyleSheet, View, Text } from 'react-native';

const ReservationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This Is The Reservation Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ReservationScreen;