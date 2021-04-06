import React, { useState } from 'react'
import {SafeAreaView,
        KeyboardAvoidingView,
        Platform,
        StyleSheet,
        Text, 
        View
        } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input'
import Botao from '../components/Button'

export default function Profile() {
    const navigation = useNavigation();

    function handleNavigateToBalanceDetails(){
        navigation.navigate('RoutesTab');
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
                                  style={styles.loginBox}>
                 <Text style={styles.titulo}>Minha Rede</Text>                     
                <View style={styles.inputBox}>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                    <Text style={styles.contato}>(DDD)0000-00000</Text>
                </View>
                <Input  placeholder='Pesquisar'
                            width={200}
                            colorBorder='#fff'/>  
                <Botao tittle='Lista de Ativos'
                        color='#fff'
                        width={200}
                        marginBottom={100}
                        onPress={handleNavigateToBalanceDetails}/>
                      
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: '#000',
    },
    loginBox:{
        height:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    titulo:{
        color:'#fff',
        fontSize:30,
    },
    contato:{
        color:'#fff',
    },
});