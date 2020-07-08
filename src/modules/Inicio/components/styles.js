import React from 'react';
import{
    StyleSheet,
    Dimensions
} from 'react-native'


var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

module.exports = StyleSheet.create({
    Todo:{
      flex: 1,
    },
    Encabezado:{
      height: height*.15, 
      width: width,
      flexDirection: "row",
    },
    Cuerpo: {
      width: width,
      height: height*.72,
    },
    Pie: {
      width: width,
      height: height*.13,
      alignItems: "flex-end",
      paddingEnd: 20,     
    },
    Menu:{
      width: 35,
      height: 35,
      marginLeft: 15,
      marginTop: 12,
    },
    LetraNegraAtras: {
      fontSize: 18,
      color: "#000000",
      fontFamily: "roboto",
      marginTop: 13
    },
    LetraNegraTitulo: {
      fontSize: 22,
      color: "#000000",
      fontFamily: "roboto",
      marginTop: 11
    },
    FloatingAction: {
      borderRadius: 100,
      height: width*0.13,
      width: width*0.13,
      backgroundColor: "#49AAC9",
      justifyContent: "center",
    },
    Plus: {
      width: width*0.04,
      height: width*0.04,
      alignSelf: "center",
    },
  });