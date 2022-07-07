import { View } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// import screens
import HomeScreen from "./Screens/HomeScreen";
import NotificationScreen from "./Screens/NotificationScreen";
import SearchSreen from "./Screens/SearchScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import AddScreen from "./Screens/AddScreen";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 30,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            with: 10,
            height: 10,
          },
        },
      }}
    >
      {/**
       * Home
       */}

      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "White",
            backgroundColor: "white",
            position: "absolute",
            bottom: 30,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              with: 10,
              height: 10,
            },
          },
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? "green" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        })}
      />

      {/**
       * Search
       */}

      <Tab.Screen
        name={"Search"}
        component={SearchSreen}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <FontAwesome5
                name="search"
                size={20}
                color={focused ? "green" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />

      {/**
       * Add
       */}

      <Tab.Screen
        name={"Add"}
        component={AddScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <FontAwesome5
                name="plus"
                size={20}
                color={focused ? "green" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />

      {/**
       * Notifications
       */}

      <Tab.Screen
        name={"Notifications"}
        component={NotificationScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <FontAwesome5
                name="bell"
                size={20}
                color={focused ? "green" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />

      {/**
       * Settings
       */}

      <Tab.Screen
        name={"Settings"}
        component={SettingsScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? "green" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (routeName == "Card") {
    return "none";
  }
  return "flex";
};
