import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer, NavigationContainer } from '@react-navigation/native'
import firebase from 'firebase'

import LogIn from './src/modules/LogIn/containers/LogIn'
import SignUp from './src/modules/SignUp/containers/SignUp'

const Stack = createStackNavigator()

export default class App extends Component{

    componentWillMount(){
        try{
            var firebaseConfig = {
                apiKey: "AIzaSyBPJCeRbGaHNzBWSv38AOlBZgFI5CRc49w",
                authDomain: "clubtime-9d0cb.firebaseapp.com",
                databaseURL: "https://clubtime-9d0cb.firebaseio.com",
                projectId: "clubtime-9d0cb",
                storageBucket: "clubtime-9d0cb.appspot.com",
                messagingSenderId: "1079668349268",
                appId: "1:1079668349268:web:d62cc535192510908e50c1",
                measurementId: "G-ZRJYFEF71T"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            console.log('Hasta aqui todo bienx1')
            firebase.analytics();
            console.log('Hasta aqui todo bienx2')
        } catch(err) {
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack)
            }
        }

          console.log(firebase)
    }

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator headerMode= 'none'>
                    <Stack.Screen name="LogIn" component={LogIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}