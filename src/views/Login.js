import React from 'react'
import {SafeAreaView,
        KeyboardAvoidingView,
        Platform,
        StyleSheet, 
        Image,
        View} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input'
import Botao from '../components/Button'

import LoginImg from '../assets/login_img.jpg'

export default function Login() {
    const navigation = useNavigation();

    function handleNavigateToRegisterDetails(){
        navigation.navigate('Register');
    }
    function handleNavigateToProfileDetails(){
        navigation.navigate('Profile');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View behavior={Platform.OS === 'ios' ? 'padding' : null}
                                  style={styles.loginBox}>
                <Image source={LoginImg}
                        style={styles.loginImg}/>
                <KeyboardAvoidingView style={styles.inputBox}
                                    behavior={Platform.OS === 'ios' ? 'padding' : null}>
                    <Input  placeholder='Login'
                            colorBorder='#f8c619'
                            width={200}/>
                    <Input  placeholder='Senha'
                            secureTextEntry
                            colorBorder='#f8c619'
                            width={200}/>
                </KeyboardAvoidingView>
                <Botao tittle='Login'
                        color='#f8c619'
                        width={200}
                        onPress={handleNavigateToProfileDetails}
                        />
                <Botao tittle='Cadastrar'
                        color='#f8c619'
                        width={200}
                        marginBottom={100}
                        onPress={handleNavigateToRegisterDetails}/>
            </View>
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
    loginImg:{
        width:150,
        height:150,
        borderRadius:100,
        borderColor:'#f8c619',
        borderWidth:2,
    },
});