import { StyleSheet, View, Button, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This Is The Home Screen</Text>
            <Button title='Button'></Button>
            <Button title='Button'></Button>
            <Button title='Button'></Button>
            <Button title='Button'></Button>
        </View>
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