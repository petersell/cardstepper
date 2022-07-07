import React from 'react';
import {  Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function App() {

  const content = require('./content.json')
  var cards = [];  
  for (let i = 0; i < content.cards; i++) {
    if (content[`card${i}`].type == 'textonly') {
      cards.push(
        <View style={styles.card} key={i}>
  
            <View style={styles.TitleBox}>
              <Text style={styles.title}>
                {content[`card${i}`].title}
              </Text>
            </View>
  
            <View style={styles.ContentBox}>
              <Text style={styles.content}>
                {content[`card${i}`].content}
              </Text>
            </View>
  
          </View>
      );
    } else if (content[`card${i}`].type == 'task') {
      var steps = [];
        for (let j = 0; j < content[`card${i}`].content.items; j++) {
          steps.push(
            <View style={styles.ItemBox} key={j}>
              <TouchableOpacity>
                <Text style={styles.TaskItem}>
                  {content[`card${i}`].content[`step${j}`]}{'\n'}
                </Text>
              </TouchableOpacity>
            </View>
        );
        }
        cards.push(
          <View style={styles.card} key={i}>
      
                <View style={styles.TitleBox}>
                  <Text style={styles.title}>
                    {content[`card${i}`].title}
                  </Text>
                </View>
      
                <View style={styles.TaskBox}>
                  
                    <ScrollView horizontal={ false }  showsVerticalScrollIndicator={ false }>
                        {steps}
                    </ScrollView>
                  
                </View>
      
              </View>
        )
      }
    
  }

  return(
      <ScrollView horizontal={ true } pagingEnabled={ true } showsHorizontalScrollIndicator={ false }>
          
        {cards}

      </ScrollView>
  );
}

function test() {
  alert("test")
}


const styles = require('./style');


export default App;