import React, { useState } from 'react'
import {SafeAreaView,
        KeyboardAvoidingView,
        Platform,
        StyleSheet,
        Text, 
        View,
        CheckBox} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input'
import Botao from '../components/Button'

export default function Register() {
    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();

    function handleNavigateToProfileDetails(){
        navigation.navigate('Profile');
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
                                  style={styles.loginBox}>
                 <Text style={styles.titulo}>Cadastro</Text>                     
                <View style={styles.inputBox}>
                    <Input  placeholder='Numero de Telefone'
                            width={200}
                            colorBorder='#fff'/>
                    <Input  placeholder='Senha'
                            secureTextEntry
                            width={200}
                            colorBorder='#fff'/>
                    <Input  placeholder='Confirme a senha'
                            secureTextEntry
                            width={200}
                            colorBorder='#fff'/>
                    <Input  placeholder='Codigo de Indicação'
                            width={200}
                            colorBorder='#fff'/>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Politica de Privacidade e Termos de Uso</Text>
                </View>
                <Botao tittle='Cadastrar'
                        color='#f8c619'
                        width={200}
                        marginBottom={100}
                        onPress={handleNavigateToProfileDetails}/>
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
    loginImg:{
        width:150,
        height:150,
        borderRadius:100,
        borderColor:'#f8c619',
        borderWidth:2,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
        backgroundColor:'#fff',
      },
      label: {
        margin: 8,
        color:'#fff',
      },
});