import React from "react";
import { useState } from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Alert,
} from "react-native";
import { Input } from "react-native-elements";
import RsvpButton from "../components/rsvpButton";
import * as MailComposer from "expo-mail-composer";

const ContactScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const sendEmail = () => {
        MailComposer.composeAsync({
            recipients: [`${email}`, "jordanulves@gmail.com"],
            subject: "Ulves Wedding",
            body: `First Name: ${firstName} \nLast Name: ${lastName} \nEmail: ${email} \nPhone Number: ${number} \nMessage: ${text}`,
        });
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setNumber("");
        setEmail("");
        setText("");
    };

    const handleSubmit = () => {
        const message = `Thank you for contacting us ${firstName} ${lastName}.\n\nWe will get back to you right away!`;

        console.log("handleRSVP function called");
        if (
            firstName.trim() === "" &&
            lastName.trim() === "" &&
            email.trim() === "" &&
            number.trim() === "" &&
            text.trim() === ""
        ) {
            console.log("First name or last name is missing");
            Alert.alert("Please fill out the fields below");
            return;
        } else {
            console.log("form is complete");
            Alert.alert(message);
            console.log("form is reset");
            sendEmail();
            resetForm();
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.topContainer}>
                    <Text style={{ paddingBottom: 20 }}>
                        We look forward to celebrating with you.
                    </Text>
                    <Text>
                        Please feel free to contact us with any questions you
                        may have about the ceremony.
                    </Text>
                </View>
            </View>

            <View>
                <Input
                    placeholder="First Name"
                    leftIcon={{ type: "font-awesome", name: "user-o" }}
                    onChangeText={(firstName) => setFirstName(firstName)}
                    value={firstName}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder="Last Name"
                    leftIcon={{ type: "font-awesome", name: "user-o" }}
                    onChangeText={(lastName) => setLastName(lastName)}
                    value={lastName}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder="Phone #"
                    leftIcon={{ type: "font-awesome", name: "phone" }}
                    onChangeText={(number) => setNumber(number)}
                    value={number}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder="Email"
                    leftIcon={{ type: "font-awesome", name: "envelope" }}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <TextInput
                    editable
                    placeholder="Message"
                    multiline={true}
                    numberOfLines={7}
                    maxLength={500}
                    onChangeText={(text) => setText(text)}
                    value={text}
                    style={styles.textInput}
                />
                <View>
                    <RsvpButton
                        title="Submit"
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topContainer: {
        alignItems: "center",
        backgroundColor: "#b8c5d1",
        // marginTop: 20,
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        borderStyle: "solid",
        paddingLeft: 10,
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 20,
        opacity: 0.6,
        fontSize: 15,
        textAlignVertical: "top",
        paddingTop: 10,
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
