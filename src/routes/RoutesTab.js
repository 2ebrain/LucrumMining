import React from 'react'

import { FontAwesome } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from '../views/Profile'
import Balance from '../views/Balance'
import Home from '../views/Home'
import Help from '../views/Help'
import Off from '../views/Off'

const { Navigator, Screen } = createBottomTabNavigator();

{/** Esse é o sistema inicial de rotas por Tab.*/}

export default function RoutesTab() {
    return(
        <Navigator
        tabBarOptions={{
            style:{
                height:65,
                borderTopWidth:3,
                borderTopColor:'#f8c619',
                backgroundColor:'#000',
            },
            iconStyle:{
                flex:0,
                width:50,
                height:50,
            },
            showLabel:false,

        }}>
            <Screen name="Profile" 
                    component={Profile}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='user' size={50} color='#fff'/>
                            );
                        }
                    }} 
            />
            <Screen name="Balance" 
                    component={Balance}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='dollar' size={50} color='#fff'/>
                            );
                        }
                    }} 
            />
            <Screen name="Home" 
                    component={Home}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='home' size={50} color='#fff'/>
                            );
                        }
                    }} 
            />
            <Screen name="Help" 
                    component={Help}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='question' size={50} color='#fff'/>
                            );
                        }
                    }} 
            />
            <Screen name="Off" 
                    component={Off}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='power-off' size={50} color='#fff'/>
                            );
                        }
                    }} 
            />
        </Navigator>
    );
}