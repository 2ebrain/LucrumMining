import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../src/views/Login'
import Register from '../src/views/Register'
import Profile from '../src/views/Profile'
import Balance from '../src/views/Balance'


const { Navigator, Screen} = createStackNavigator();

export default function Routes() {
   return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Balance" component={Balance} />
        </Navigator>
    </NavigationContainer>
   );
}