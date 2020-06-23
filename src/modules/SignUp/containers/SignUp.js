import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  ImageBackground, 
  Dimensions, 
  Image, 
  TextInput,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

var styles = require('../components/styles')

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export default class App extends Component{
    render(){
        return(
            <View >
                <ImageBackground source={require('../components/images/fondoencabezado.png')} style={styles.Encabezado}>
                    <Image source={require('../components/images/logogrande.png')} style={styles.Logo} />
                </ImageBackground>

                <ScrollView style={styles.Cuerpo}>

                </ScrollView>
            </View>
        )
    }
}