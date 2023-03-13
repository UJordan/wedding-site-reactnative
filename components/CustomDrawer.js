import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

    const CustomDrawer = props => {
    return (
        <View style={{ flex:1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{  }}>
                {/* <ImageBackground> */}
                <View style={{ flexDirection: 'row', backgroundColor: '#b8c5d1', }}>
                    <Image source={require('../assets/images/CJ7.jpeg')} style={{ marginLeft:10, marginBottom: 10, marginTop: 10, height: 100, borderRadius: 7, width: 70}}/>
                    <View style={{ marginLeft: 20, marginTop:25,}}>
                        <Text style={{ color: '#fff' }}>Cassidy & Jordan</Text>
                        <Text style={{ color: '#fff' }}>August 19, 2023 </Text>
                        <Text style={{ color: '#fff' }}>Summit House Fullerton </Text>
                    </View>
                </View>
                {/* </ImageBackground> */}
                <View style={{ backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        <View style={{ padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
            <Text>Placeholder Text</Text>
        </View>
        </View>
    );
};

export default CustomDrawer;