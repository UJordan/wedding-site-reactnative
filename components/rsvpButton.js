// import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RsvpButton = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: '#b8c5d1',
        borderRadius: 10,
        paddingVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        // paddingHorizontal: 12,
        // activeOpacity: 0.5,
    },
    appButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default RsvpButton;