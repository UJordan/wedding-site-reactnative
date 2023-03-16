import * as React from 'react';
import { Animated, Dimensions, Image, FlatList, Text, View, StyleSheet } from 'react-native';
// import CJ2 from '../assets/images/CJ2.jpeg';
// import CJ3 from '../assets/images/CJ3.jpeg';
// import CJ4 from '../assets/images/CJ4.jpeg';
// import CJ5 from '../assets/images/CJ5.jpeg';
// import CJ6 from '../assets/images/CJ6.jpg';
// import CJ7 from '../assets/images/CJ7.jpeg';
// import CJ8 from '../assets/images/CJ8.jpeg';
// import CJ9 from '../assets/images/CJ9.jpeg';
// import CJ10 from '../assets/images/CJ10.jpeg';
// import CJ11 from '../assets/images/CJ11.jpeg';
import { engagementPics } from '../shared/projectPhotos';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.95;
const ITEM_HEIGHT = ITEM_WIDTH * 1.80;

// const images = [
//   CJ2, CJ3, CJ4, CJ5, CJ6, CJ7, CJ8, CJ9, CJ10, CJ11
// ];

const data = engagementPics.map((image, index) => ({
  key: String(index),
  photo: image.image
}));

const Carousel = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList 
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: {x: scrollX }}}],
          {useNativeDriver: true }
        )}
        renderItem={({item, index}) => {
          const inputRange= [
            (index -1) * width,
            index * width,
            (index + 1) * width
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * .7, 0, width * .7]
          })
          return ( 
            <View 
              style={{ width, justifyContent: 'center', alignItems: 'center' }}
            >
              <View 
                // style={{
                //   borderRadius: 18,
                //   borderWidth: 10,
                //   shadowColor: '#000',
                //   shadowOpacity: 1,
                //   shadowRadius: 20,
                //   shadowOffset: {
                //     width: 0,
                //     height: 0,
                //   },
                //   borderRadius: 18,
                //   padding: 12,
                //   backgroundColor: 'white',
                // }}
              >
                <View 
                  style={{
                    width: ITEM_WIDTH, 
                    height: ITEM_HEIGHT,
                    overflow: 'hidden',
                    alignItems: 'center',
                    borderRadius: 14,
                  }}
                >
                  <Animated.Image 
                    source={item.photo} 
                    style={{ 
                      width: ITEM_WIDTH * 1, 
                      height: ITEM_HEIGHT, 
                      resizeMode: 'cover',
                      transform: [
                        {
                          translateX,
                        },
                      ]
                    }}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Carousel