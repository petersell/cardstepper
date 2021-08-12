/*-----------Imports-----------*/

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';

/*----------Variables----------*/

/*-Color-*/

const BackColorBright = '#F8F8FF';
const BackColorDrark = '#0d1117';

/*-Size-*/

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeigth = Dimensions.get('window').height;

/*-Font-*/

/*const FontTitle = 'Raleway_400Regular'*/

/*------------Style------------*/

module.exports = StyleSheet.create({
  card: {
    backgroundColor: BackColorBright,
    width: ScreenWidth,
  },

  TitleBox: {
    marginTop: 20,
    marginLeft: 0,
  },

  title: {
    fontSize: 30,
    paddingLeft: 20,
    marginTop: 10,
    padding: 0,
    color: 'black',
    /*fontFamily: FontTitle,*/
    borderBottomWidth: 1,
  },

  ContentBox: {
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  content: {
    fontSize: 17,
  },

  TaskBox: {
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },

  ItemBox: {
    borderWidth: 1,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
    padding: 0,
    borderRadius: 7
  },

  TaskItem: {
    fontSize: 18,
    textAlign: 'center',
    padding: 0,
  },
});