import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardView from "./CardScreen";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 19,
  },
  item: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      with: 10,
      height: 10,
    },
  },
  title: {
    fontSize: 28,
  },
  author: {
    flex: 1,
    right: 15,
    textAlign: "right",
    position: "absolute",
    top: "50%",
  },
  info: {
    margin: "5%",
    backgroundColor: "green",
    height: "85%",
    width: "90%",
    borderRadius: 20,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Stack = createNativeStackNavigator();
const cards = require("./../cards/cards.json");

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectCard"
        component={SelectCard}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Card"
        component={Card}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

function Card({ navigation, route }) {
  return <CardView content={route.params.content} />;
}

function SelectCard({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {cards.map((card, i) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Card", {
                content: card.content,
              })
            }
            key={i}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.author}>{card.author}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
export default HomeScreen;
