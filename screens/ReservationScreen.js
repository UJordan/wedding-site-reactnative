import { useState } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { Input } from "react-native-elements";
import RsvpButton from "../components/rsvpButton";

const ReservationScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRSVP = () => {
    if (firstName.trim() === "" || lastName.trim() === "") {
      Alert.alert("Please enter your first and last name");
      return;
    }

    Alert.alert(`Thank you for RSVPing, 
				/n${firstName} ${lastName}!`);
    setFirstName("");
    setLastName("");
  };

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
        <Text style={styles.text}>First Name:</Text>
        <Input
          placeholder="First Name"
          leftIcon={{ type: "font-awesome", name: "user-o", color: "#b8c5d1" }}
          leftIconContainerStyle={{ paddingRight: 10 }}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Text style={styles.text}>Last Name:</Text>
        <Input
          placeholder="Last Name"
          leftIcon={{ type: "font-awesome", name: "user-o", color: "#b8c5d1" }}
          leftIconContainerStyle={{ paddingRight: 10 }}
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>
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
