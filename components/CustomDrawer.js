import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = props => {
    return (
        <View style={{ flex:1 }}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#b8c5d1' }}>
            {/* <ImageBackground> */}
                <Image source={require('../assets/images/CJ7.jpeg')} style={{ marginLeft:10, height: 100, borderRadius: 30, width: 70}}/>
            {/* </ImageBackground> */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View>
            <Text>Placeholder Text</Text>
        </View>
        </View>
    );
};

export default CustomDrawer;