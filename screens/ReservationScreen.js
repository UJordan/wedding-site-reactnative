import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { Input } from "react-native-elements";
import { RadioButton } from "react-native-paper";
import RsvpButton from "../components/rsvpButton";

const ReservationScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [value, setValue] = useState("yes");

    const handleRSVP = () => {
        console.log("handleRSVP function called");
        if (firstName.trim() === "" || lastName.trim() === "") {
            console.log("First name or last name is missing");
            Alert.alert("Please enter your first and last name");
            return;
        }
        if (value === "no") {
            console.log("Value is no");
            Alert.alert(
                "We're sorry you can't attend, but thank you for letting us know."
            );
        } else {
            console.log("Value is yes");
            Alert.alert(`Thank you for RSVPing ${firstName} ${lastName}!`);
        }
        console.log("form is reset");
        setFirstName("");
        setLastName("");
    };

    useEffect(() => {
        console.log("First name and last name updated.");
    }, [firstName, lastName]);

    return (
        <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require("../assets/images/CJ1.jpeg")}
                    style={{ height: 300, width: 400 }}
                />
            </View>
            <View>
                <View style={{ margin: 10 }} />
                <Input
                    placeholder="First Name"
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
                    leftIcon={{
                        type: "font-awesome",
                        name: "user-o",
                        color: "#b8c5d1",
                    }}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(lastName) => setLastName(lastName)}
                />
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
            <RsvpButton
                title="RSVP"
                onPress={handleRSVP}
            />
        </View>
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
        fontSize: 15,
        fontWeight: "bold",
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
});

export default ReservationScreen;
