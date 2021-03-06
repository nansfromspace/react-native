import React from 'react';
import {View, Text, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Logo from '../../assets/FSE.png'

export default function Home({navigation}){

    return(
        <View style={styles.safe}>
            <Image source={Logo} style={styles.img} />

            <View><Text style={styles.titulo}>Faça seu login aqui:</Text></View>

            
            <TouchableOpacity style={styles.btn}
            title='Ir para Sobre' onPress={()=>
                navigation.navigate('Home')
            }>
                <Text> Home </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            title='Ir para Produtos' onPress={()=>
                navigation.navigate('Produtos')
            }>
                <Text>Nssos produtos</Text>
            </TouchableOpacity>

            <TextInput 
                placeholder="Escreva seu email aqui"
                style={styles.inputEmail}
            />

            <TextInput 
                placeholder="Escreva sua senha aqui"
                style={styles.inputSenha}   
                secureTextEntry={true} 
            />
            
            <TouchableOpacity  style={styles.btn} >
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}