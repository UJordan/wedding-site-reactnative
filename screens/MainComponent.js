import { StyleSheet, View, Platform, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import InfoScreen from "./InfoScreen";
import ReservationScreen from "./ReservationScreen";
import Gallery from "./Gallery.js";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#b8c5d1" },
  headerShown: true,
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => (
            <Icon
              name="home"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const InfoNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="info-circle"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ReservationNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Reservation"
        component={ReservationScreen}
        options={({ navigation }) => ({
          title: "Reservation",
          headerLeft: () => (
            <Icon
              name="calendar-check-o"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const GalleryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Favorites"
        component={Gallery}
        options={({ navigation }) => ({
          title: "Gallery",
          headerLeft: () => (
            <Icon
              name="camera"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ContactNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={({ navigation }) => ({
          title: "Contact Us",
          headerLeft: () => (
            <Icon
              name="address-card"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: "#b8c5d1" }}>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name="home"
                size={22}
                iconStyle={{ width: 22 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Information"
          component={InfoNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5
                name="info-circle"
                size={22}
                iconStyle={{ width: 22 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Reservation"
          component={ReservationNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5
                name="calendar-check"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Gallery"
          component={GalleryNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5
                name="images"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5
                name="envelope-open-text"
                size={22}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
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
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 22,
  },
});

export default Main;
