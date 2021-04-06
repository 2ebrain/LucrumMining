import React, { useState } from 'react'
import {SafeAreaView,
        KeyboardAvoidingView,
        Platform,
        StyleSheet,
        Text, 
        View
        } from 'react-native'
import Input from '../components/Input'
import Botao from '../components/Button'

export default function Profile() {
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.loginBox}>
                <Input  placeholder='Código Indicação'
                            width={200}
                            colorBorder='#fff'/> 
                <Botao tittle='Adicionar'
                        color='#fff'
                        width={200}
                />   
            </View>
            <View style={styles.balanceBox}>
                <Text style={styles.textSaldo}>Saldo:</Text>
                <View style={styles.cashBox}>
                    <Text style={styles.cashText}>R$100,00</Text>
                </View>    
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: '#000',
        justifyContent:'space-evenly',
    },
    loginBox:{
        justifyContent:'flex-start',
    },
    balanceBox:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    textSaldo:{
        color:'#fff',
        fontSize:25,
    },
    cashBox:{
        backgroundColor:'#FAC20A',
        width:150,
        height:150,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    cashText:{
        fontSize:25,
    },
    titulo:{
        color:'#fff',
        fontSize:30,
    },
    contato:{
        color:'#fff',
    },
});