import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LogIn from './src/modules/LogIn/containers/LogIn'
import SignUp from './src/modules/SignUp/containers/SignUp'
import Inicio from './src/modules/Inicio/containers/Inicio'

const StackApp = createStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Inicio}/>
        </Drawer.Navigator>
    )
}

export default class App extends Component{
    render(){
        return(
            <NavigationContainer>
                <StackApp.Navigator headerMode= 'none'>
                    <StackApp.Screen name="LogIn" component={LogIn} />
                    <StackApp.Screen name="SignUp" component={SignUp} />
                    <StackApp.Screen name="AppContent" component={DrawerNavigator}/> 
                </StackApp.Navigator>
            </NavigationContainer>
        );
    }
}