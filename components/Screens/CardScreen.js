import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import Carousel from "pinar";

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 40,
    //borderWidth: 1,
    paddingVertical: 45,
    paddingHorizontal: 23,
    width: "100%",
    //marginVertical: 10,
    //marginTop: 18,
    //backgroundColor: "#d9d9d9",
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "flex-start",
  },
});

const CardView = (props) => {
  const card = props.content;
  return (
    <Carousel style={{ backgroundColor: "#fff" }}>
      {/*<View style={styles.card}>
        <View style={styles.cardBody}>
          <View style={{ marginTop: 20, marginLeft: 0 }}>
            <Text style={styles.title}>{card[0].title}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text>{card[0].content}</Text>
          </View>
        </View>
  </View>*/}
      <View style={[styles.card, styles.elevation]}>
        <View>
          <Text style={styles.heading}>{card[0].title}</Text>
        </View>
        <Text>{card[0].content}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#F8F8FF",
          width: Dimensions.get("window").width,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            marginTop: 20,
            margin: 10,
            paddingBottom: Dimensions.get("window").height - 125 - 70,
            borderRadius: 20,
          }}
        >
          <View style={{ marginTop: 20, marginLeft: 0 }}>
            <Text
              style={{
                fontSize: 30,
                paddingLeft: 20,
                marginTop: 0,
                paddingTop: 0,
                padding: 0,
                color: "black",
                //borderWidth: 1,
              }}
            >
              {card[1].title}
            </Text>
          </View>
          <View
            style={{
              color: "black",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Text>{card[1].content}</Text>
          </View>
        </View>
      </View>
      {/*
      <View style={styles.card}>
        <View styel={styles.cardBody}>
          <Text style={styles.title}>1</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View styel={styles.cardBody}>
          <Text style={styles.title}>2</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View styel={styles.cardBody}>
          <Text style={styles.title}>3</Text>
        </View>
      </View>
  */}
    </Carousel>
  );
};

export default CardView;
