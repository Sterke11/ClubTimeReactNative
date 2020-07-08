import React, {Component} from 'react';
import { 
  Text, 
  View, 
  ImageBackground, 
  Dimensions, 
  Image, 
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

var styles = require('../components/styles')

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export default class App extends Component{

  constructor(){
    super()
    this.state= {
      Boleta: "",
      Pass: "",
      EmptyBol: false,
      EmptyPass: false
    }
  }

  handleChangeBoleta(newText){
    this.setState({
      Boleta: newText.replace(/[^0-9]/g, ''),
      EmptyBol: false,
    });
  }
  handleChangePass(newText){
    this.setState({
      Pass: newText,
      EmptyPass: false
    });
  }
  handlePressFlecha(){
    if (this.state.Boleta == "") {
      this.setState({
        EmptyBol: true,
      });
    }
    if (this.state.Pass == "") {
      this.setState({
        EmptyPass: true,
      });
    }
    if (this.state.Pass == "" || this.state.Boleta){
      ToastAndroid.showWithGravity(
        "Los campos no pueden estar vacios.",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      this.props.navigation.navigate('AppContent')
    }
  }
  handlePressSignUp(){
    this.props.navigation.navigate('SignUp')
  }

  render(){
    return (
      <View style={styles.Todo}>
        <View style={styles.Encabezado}>
          <Image source={require('../../../images/logogrande.png')} style={styles.Logo} />
        </View>
        <ImageBackground source={require('../../../images/fondogrande.png')} style={styles.Cuerpo}>

          <View style={{height: height*.23}} />

          <Text style={styles.Letra}>No. Boleta</Text>

          <TextInput 
            defaultValue={this.state.Boleta}
            style={[
              styles.EditBox,
              this.state.EmptyBol ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#FFFFFF"}
            ]} 
            onChangeText={(newText)=>this.handleChangeBoleta(newText)}
            keyboardType="numeric"
            maxLength={10}  
          />

          <View style={{height: height*.05}} />

          <Text style={styles.Letra}>Contraseña</Text>

          <TextInput 
            defaultValue={this.state.Pass}
            style={[
              styles.EditBox,
              this.state.EmptyPass ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#FFFFFF"}
            ]}
            onChangeText={(newText)=>this.handleChangePass(newText)}
            secureTextEntry={true}
          />

          <View style={{height: height*.08}} />

          <TouchableOpacity onPress={()=>this.handlePressFlecha()}>
            <Image 
              style={styles.Flecha} 
              source={require('../../../images/flechablancader.png')} 
            />
          </TouchableOpacity>

          <View style={{height: height*.08}} />

          <TouchableOpacity onPress={() => this.handlePressSignUp()}>
            <Text style={styles.Registrar}>
                Registrarse
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
