import React, {Component} from 'react';
import { 
    StyleSheet,
    Text, 
    View , 
    ImageBackground, 
    Dimensions, 
    Image, 
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BoxShadow } from 'react-native-shadow'
import FireBase from '../../../clases/DB/FireBase'

var styles = require('../components/styles')

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export default class App extends Component{

    constructor(){
        super()
        this.state= {
            Nombre: "",
            ApPaterno: "",
            ApMaterno: "",
            Boleta: "",
            Email: "",
            Pass: "",
            EmptyNombre: false,
            EmptyApPaterno: false,
            EmptyApMaterno: false,
            EmptyBoleta: false,
            EmptyEmail: false,
            EmptyPass: false,
        }
    }
    handleChangeNombre(newText){
        this.setState({
            Nombre: newText.replace(/[0-9]/g, '\0'),
            EmptyNombre: false,
        })
    }
    handleChangeApPaterno(newText){
        this.setState({
            ApPaterno: newText.replace(/[0-9]/g, '\0'),
            EmptyApPaterno: false,
        })
    }
    handleChangeApMaterno(newText){
        this.setState({
            ApMaterno: newText.replace(/[0-9]/, '\0'),
            EmptyApMaterno: false,
        })
    }
    handleChangeBoleta(newText){
        this.setState({
            Boleta: newText.replace(/[^0-9]/, '\0'),
            EmptyBoleta: false,
        })
    }
    handleChangeEmail(newText){
        this.setState({
            Email: newText,
            EmptyEmail: false,
        })
    }
    handleChangePass(newText){
        this.setState({
            Pass: newText,
            EmptyPass: false,
        })
    }
    handlePressRegistrar(){
        if(this.state.Email.indexOf('@') == -1){
            ToastAndroid.showWithGravity(
                "Correo electrónico inválido.",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            )
        }
        else if(this.state.Nombre == "" || this.state.ApPaterno == "" || this.state.ApMaterno == "" || this.state.Boleta == "" || this.state.Email == "" || this.state.Pass == ""){
            if(this.state.Nombre == "") this.setState({EmptyNombre: true})
            if(this.state.ApPaterno == "") this.setState({EmptyApPaterno: true})
            if(this.state.ApMaterno == "") this.setState({EmptyApMaterno: true})
            if(this.state.Boleta == "") this.setState({EmptyBoleta: true})
            if(this.state.Email == "") this.setState({EmptyEmail: true})
            if(this.state.Pass == "") this.setState({EmptyPass: true})
            ToastAndroid.showWithGravity(
                "Los campos no pueden estar vacios.",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            )
        }
        else {
            // console.log("\nNombre: " + this.state.Nombre +
            //             "\nApPaterno: " + this.state.ApPaterno +
            //             "\nApMaterno: " + this.state.ApMaterno +
            //             "\nBoleta: " + this.state.Boleta +
            //             "\nEmail: " + this.state.Email +
            //             "\nPassword: " + this.state.Pass
            // )
            setTimeout(() => {
                FireBase.database().ref("Usuario/" + this.state.Boleta).once("value", (data) =>{
                    if(!data.exists()){
                        FireBase.database().ref("Usuario/" + this.state.Boleta).set({
                            Nombre: this.state.Nombre,
                            ApPaterno: this.state.ApPaterno,
                            ApMaterno: this.state.ApMaterno,
                            Boleta: this.state.Boleta,
                            Email: this.state.Email,
                            Password: this.state.Pass,
                        }).then(() => {
                            ToastAndroid.showWithGravity(
                                "¡Registro Exitoso!",
                                ToastAndroid.LONG,
                                ToastAndroid.CENTER
                            )
                            this.props.navigation.navigate('LogIn')
                        }).catch((error) => {
                            ToastAndroid.showWithGravity(
                                "¡Ocurrio un error inesperado!",
                                ToastAndroid.LONG,
                                ToastAndroid.CENTER
                            )
                            console.error("Error al insertar: " + error)
                        })
                    }
                    else {
                        ToastAndroid.showWithGravity(
                            "Ya existe un usuario con ese numero de boleta",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER
                        )
                    }
                })
            }, 3000)
        }
    }

    render(){
        return(
            <View style={styles.Todo}>
                <ImageBackground source={require('../components/images/fondoencabezado.png')} style={styles.Encabezado}>
                    <Image source={require('../components/images/logogrande.png')} style={styles.Logo} />
                </ImageBackground>

                <ScrollView style={styles.Cuerpo}>
                    <Text style={styles.SubTitulo}>
                        Bienvenido
                    </Text>

                    <View style={{height: height*.05}}></View>

                    <Text style={styles.Letra}>
                        Nombre
                    </Text>
                    <TextInput 
                        defaultValue = {this.state.Nombre}
                        style={[
                            styles.EditBox,
                            this.state.EmptyNombre ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#AED6F1"}
                        ]} 
                        onChangeText = {(newText) => this.handleChangeNombre(newText)}
                    />

                    <View style={{height: height*.03}}></View>

                    <Text style={styles.Letra}>
                        Apellido Paterno
                    </Text>
                    <TextInput 
                        defaultValue = {this.state.ApPaterno}
                        style={[
                            styles.EditBox,
                            this.state.EmptyApPaterno ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#AED6F1"}
                        ]} 
                        onChangeText = {(newText) => this.handleChangeApPaterno(newText)}
                    />

                    <View style={{height: height*.03}}></View>

                    <Text style={styles.Letra}>
                        Apellido Materno
                    </Text>
                    <TextInput 
                        defaultValue = {this.state.ApMaterno}
                        style={[
                            styles.EditBox,
                            this.state.EmptyApMaterno ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#AED6F1"}
                        ]} 
                        onChangeText = {(newText) => this.handleChangeApMaterno(newText)}
                    />

                    <View style={{height: height*.03}}></View>

                    <Text style={styles.Letra}>
                        Boleta
                    </Text>
                    <TextInput 
                        defaultValue = {this.state.Boleta}
                        style={[
                            styles.EditBox,
                            this.state.EmptyBoleta ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#AED6F1"},
                        ]} 
                        onChangeText = {(newText) => this.handleChangeBoleta(newText)}
                        keyboardType = "numeric"
                        maxLength = {10}
                    />

                    <View style={{height: height*.03}}></View>

                    <Text style={styles.Letra}>
                        Correo Electrónico
                    </Text>
                    <TextInput 
                        defaultValue = {this.state.Email}
                        style={[
                            styles.EditBox,
                            this.state.EmptyEmail ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#AED6F1"}
                        ]} 
                        onChangeText = {(newText) => this.handleChangeEmail(newText)}
                        keyboardType = "email-address"
                    />

                    <View style={{height: height*.03}}></View>

                    <Text style={styles.Letra}>
                        Contraseña
                    </Text>
                    <TextInput 
                        defaultValue = {this.state.Pass}
                        style={[
                            styles.EditBox,
                            this.state.EmptyPass ? {backgroundColor: "#FFB8DDED"} : {backgroundColor: "#AED6F1"}
                        ]} 
                        onChangeText = {(newText) => this.handleChangePass(newText)}
                        keyboardType = "visible-password"
                    />

                    <View style={{height: height*.06}}></View>

                    <BoxShadow setting={{
                        width: width*.6,
                        height:40,
                        color:"#000000",
                        border:2,
                        radius:15,
                        opacity:0.3,
                        x:0,
                        y:3,
                        style:{
                            marginVertical:5,
                            alignSelf: "center"
                        }
                    }}>
                        <TouchableOpacity 
                            style={styles.Boton}
                            onPress={() => this.handlePressRegistrar()}
                        >
                            <Text style={styles.Registrar}>
                                Registrar
                            </Text>
                        </TouchableOpacity>
                    </BoxShadow>

                    <View style={{height: height*.03}}></View>
                </ScrollView>
            </View>
        )
    }
}