import Carousel from '../components/carousel';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

const Gallery = () => {
    return (
        <View style={styles.container}>
            <Carousel />
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

export default Gallery;