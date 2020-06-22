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
      justifyContent: "flex-end",
    },
    Cuerpo: {
      width: width,
      height: height*.85,
    },
    Logo: {
      width: width*.6,
      height: height*.08,
      alignSelf: "center"
    },
    Letra: {
      fontSize: 20,
      color: "#FFFFFF",
      marginStart: 70,
      fontFamily: "roboto",
    },
    EditBox: {
      marginStart: 70,
      marginEnd: 70,
      borderRadius: 15,
      height: 40,
      color: "#0091BF",
      fontSize: 20,
      fontWeight: "bold",
    }, 
    Flecha: {
      alignSelf: "center",
      width: width*.15,
      height: height*.07
    },
    Registrar: {
      alignSelf: "center",
      fontFamily: "roboto",
      color: "#FFFFFF",
      fontSize: 20,
      fontWeight: "bold",
      textDecorationLine: "underline",
    }
  });