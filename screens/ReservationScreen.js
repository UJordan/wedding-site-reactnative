import { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, Alert } from "react-native";
import { Input } from "react-native-elements";
import { RadioButton } from "react-native-paper";
import RsvpButton from "../components/rsvpButton";
import * as MailComposer from "expo-mail-composer";

const ReservationScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [value, setValue] = useState("yes");

    const sendEmail = () => {
        MailComposer.composeAsync({
            recipients: [`${email}`, "jordanulves@gmail.com"],
            subject: "Ulves Wedding Invitation",
            body: "Thank for the Invite",
        });
    };

    const handleRSVP = () => {
        console.log("handleRSVP function called");
        if (
            firstName.trim() === "" &&
            lastName.trim() === "" &&
            email.trim() === ""
        ) {
            console.log("First name or last name is missing");
            Alert.alert("Please enter your first and last name");
            resetForm();
            return;
        }
        if (value === "no") {
            console.log("Value is no");
            Alert.alert(
                "We're sorry you can't attend, but thank you for letting us know."
            );
            console.log("form is reset");
            sendEmail();
            resetForm();
        } else {
            console.log("Value is yes");
            Alert.alert(`Thank you for RSVPing ${firstName} ${lastName}!`);
            console.log("form is reset");
            sendEmail();
            resetForm();
        }
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setValue("yes");
    };

    return (
        <ScrollView>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require("../assets/images/CJ102.jpg")}
                    style={{ height: 200, width: 300, marginTop: 20 }}
                />
            </View>
            <View>
                <View style={{ margin: 10 }} />
                <Input
                    placeholder="First Name"
                    value={firstName}
                    leftIcon={{
                        type: "font-awesome",
                        name: "user-o",
                        color: "#b8c5d1",
                    }}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(firstName) => setFirstName(firstName)}
                />
                <Input
                    placeholder="Last Name"
                    value={lastName}
                    leftIcon={{
                        type: "font-awesome",
                        name: "user-o",
                        color: "#b8c5d1",
                    }}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(lastName) => setLastName(lastName)}
                />
                <Input
                    placeholder="Email Address"
                    value={email}
                    leftIcon={{
                        type: "font-awesome",
                        name: "envelope-o",
                        color: "#b8c5d1",
                    }}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.text}>
                <Text>
                    The RSVP deadline is TBD. If we do not get an RSVP back by
                    this date, it will be marked as a "No." We will miss you
                    celebrating with us, however, we have to provide the total
                    guest counts to the venue in the timely manner they have
                    given to us and cannot accept late RSVPs due to this. We
                    hope that you understand!
                </Text>
            </View>
            <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}>
                <RadioButton.Item
                    label="Yes, I will be attending"
                    value="yes"
                />
                <RadioButton.Item
                    label="Unfortunately I can not attend"
                    value="no"
                />
            </RadioButton.Group>
            <View style={styles.button}>
                <RsvpButton
                    title="RSVP"
                    onPress={handleRSVP}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        margin: 10,
        fontWeight: "bold",
        justifyContent: "center",
        alignSelf: "center",
    },
    text: {
        alignItems: "center",
        justifyContent: "center",
    },
    donorId: {
        fontSize: 16,
        fontWeight: "normal",
        color: "black",
    },
    iconContainer: {
        alignSelf: "flex-end",
        marginRight: 10,
    },
    button: {
        padding: 20,
    },
});

export default ReservationScreen;
