import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex:1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{  }}>
                {/* <ImageBackground> */}
                <View style={styles.top}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Image 
                                source={require('../assets/images/CJ7.jpeg')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Cassidy & Jordan</Text>
                        <Text style={styles.text}>August 19, 2023</Text>
                        <Text style={styles.text}>Summit House Fullerton</Text>
                    </View>
                </View>
                {/* </ImageBackground> */}
                <View style={styles.list}>
                    <DrawerItemList 
                        {...props}
                        activeBackgroundColor={'#b8c5d1'}
                        activeTintColor={'#fff'}
                        InactiveTintColor={'#3333'}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>Celebrate With Us!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        backgroundColor: '#b8c5d1',
        height: 140,
        margin: 10,
    },
    list: {
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    textView: {
        padding:20,
        flex: 2,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    bottomContainer: {
        paddingBottom: 20,
        alignItems: 'center', // center horizontally
        justifyContent: 'center', // center vertically
    },
    bottomText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
});
export default CustomDrawer;

    
        
        