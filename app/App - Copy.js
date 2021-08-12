import React from 'react';
import {  ScrollView, Text, View, Dimensions } from 'react-native';

function App() {
  const content = require('./content.json')

  var myloop = [];

  for (let i = 0; i < 10; i++) {
    myloop.push(
      <View key={i}>
      <Text>{i}</Text>
      </View>
    );
  }


  return(
      <ScrollView horizontal={ true } pagingEnabled={ true } showsHorizontalScrollIndicator={ false }>
          
        <View style={styles.card1}>

          <View style={styles.TitleBox}>
            <Text style={styles.title}>
              {content.crad1.title}
            </Text>
          </View>

          <View style={styles.ContentBox}>
            <Text>
            {content.crad1.content}
            </Text>
          </View>

        </View>

        <View style={styles.card2}>

          <View style={styles.TitleBox}>
            <Text style={styles.title}>
              {content.crad2.title}
            </Text>
          </View>

          <View style={styles.ContentBox}>
            <Text>
            {content.crad2.content.step1}
            </Text>
          </View>

        </View>

        <View style={styles.card3}>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={styles.text}>
              Card 3
            </Text>
          </View>
        </View>

        <View style={styles.card4}>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={styles.text}>
              Card 4
            </Text>
          </View>
        </View>

      </ScrollView>
  );
}

const styles = require('./style');

export default App;