import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../views/Login'
import Register from '../views/Register'
import Profile from '../views/Profile'
import Balance from '../views/Balance'
import RoutesTab from '../routes/RoutesTab'

const { Navigator, Screen} = createStackNavigator();

export default function Routes() {
   return(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Balance" component={Balance} />
            <Screen name="RoutesTab" component={RoutesTab} />
        </Navigator>
    </NavigationContainer>
   );
}