import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer, NavigationContainer } from '@react-navigation/native'

import LogIn from './src/modules/LogIn/containers/LogIn'
import SignUp from './src/modules/SignUp/containers/SignUp'

const Stack = createStackNavigator()

export default class App extends Component{

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