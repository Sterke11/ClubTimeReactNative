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
    },
    Cuerpo: {
      width: width,
      height: height*.85,
    },
    Logo: {
      width: width*.4,
      height: height*.08,
      alignSelf: "flex-end"
    },
    Letra: {
      fontSize: 18,
      color: "#0091BF",
      marginStart: 70,
      fontFamily: "roboto",
      fontWeight: "bold",
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
    SubTitulo: {
      alignSelf: "center",
      fontSize: 40,
      color: "#03A9F4",
      fontFamily: "roboto",
      fontWeight: "bold",
    },
    Boton: {
      borderRadius: 15,
      height: 40,
      color: "#0091BF",
      fontSize: 20,
      fontWeight: "bold", 
      justifyContent: "center", 
      backgroundColor: "#49AAC9",
    }, 
    Registrar: {
      alignSelf: "center",
      fontFamily: "roboto",
      color: "#FFFFFF",
      fontSize: 20,
      fontWeight: "bold",
    }
  });