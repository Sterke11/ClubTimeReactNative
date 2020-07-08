import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ToastAndroid,
    LayoutAnimation,
    Animated
} from 'react-native';
import FireBase from '../../../clases/DB/FireBase'
import NetInfo from '@react-native-community/netinfo'
import { ScrollView } from 'react-native-gesture-handler'
import { BoxShadow } from 'react-native-shadow'

var styles = require('../components/styles')
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            displayFloatingAction: false,
            FloatingActionWidth: new Animated.Value(0),
        }
    }

    handleFloatingAction() {
        const display = this.state.displayFloatingAction

        display? 
            Animated.timing(this.state.FloatingActionWidth, { 
                toValue: 0,
                duration: 2000,
                useNativeDriver: false     
            }).start()
            :
            Animated.timing(this.state.FloatingActionWidth, { 
                toValue: width*0.13,
                duration: 2000,
                useNativeDriver: false     
            }).start()
        

        this.setState({
            displayFloatingAction: !display
        })
    }

    render() {
        const display = this.state.displayFloatingAction
        return (
            <View style={styles.Todo}>
                <ImageBackground source={require('../../../images/fondoencabezado.png')} style={styles.Encabezado}>
                    <TouchableOpacity 
                        style={{flexDirection: 'row', width: width*0.3}}
                        onPress={() => this.props.navigation.openDrawer()}
                    >
                        <Image source={require('../../../images/menu.png')} style={styles.Menu} resizeMode='contain' />
                    </TouchableOpacity>
                    <View style={{width: width*0.4, alignItems: "center"}}>
                        <Text style={styles.LetraNegraTitulo}>Clubes</Text>
                    </View>
                    <View style={{width: width*0.3}}>

                    </View>
                </ImageBackground>

                <View style={styles.Cuerpo}>
                    <ScrollView>

                    </ScrollView>
                    {display?
                        <View> 
                            <Animated.View style={{ width: this.state.FloatingActionWidth, height: this.state.FloatingActionWidth}}>
                                <BoxShadow setting={{
                                    height: width*0.13,
                                    width: width*0.13,
                                    color:"#000000",
                                    border:5,
                                    radius:35,
                                    opacity:0.4,
                                    x:2,
                                    y:2,
                                }}
                                    style = {{
                                        paddingBottom: 10
                                    }}
                                >
                                    <TouchableOpacity
                                        style={styles.FloatingAction}
                                        onPress={()=>this.handleFloatingAction()}
                                    >
                                        <Image source={require('../../../images/plus.png')} resizeMode="contain" style={styles.Plus}/>
                                    </TouchableOpacity>
                                </BoxShadow>
                            </Animated.View>
                            <Animated.View style={{ width: this.state.FloatingActionWidth, height: 200, marginBottom: 100, backgroundColor: 'red', alignSelf: 'center' }} >

                            </Animated.View>
                        </View>
                    
                        
                        :
                        <View>
                            <Animated.View style={{ width: this.state.FloatingActionWidth, height: 200, marginBottom: 100, backgroundColor: 'red', alignSelf: 'center' }} >

                            </Animated.View>
                        </View>
                
                    }
                </View>
                <View style={styles.Pie}>

                    <BoxShadow setting={{
                        height: width*0.13,
                        width: width*0.13,
                        color:"#000000",
                        border:5,
                        radius:35,
                        opacity:0.4,
                        x:2,
                        y:2,
                    }}
                        style = {{
                            paddingBottom: 10
                        }}
                    >
                        <TouchableOpacity
                            style={styles.FloatingAction}
                            onPress={()=>this.handleFloatingAction()}
                        >
                            <Image source={require('../../../images/plus.png')} resizeMode="contain" style={styles.Plus}/>
                        </TouchableOpacity>
                    </BoxShadow>
                </View>
            </View>
        )
    }
}