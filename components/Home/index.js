import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './styles'
import Logo from '../../assets/FSE.png'

export default function Home(props){
    const {navigation} = props;
    return (
        <SafeAreaView 
        style={styles.safe}
        >
            
            <Image source={Logo} style={styles.img}/>

            <TouchableOpacity style={styles.btn}
            title='Ir para Sobre' onPress={()=>
                navigation.navigate('Login')
            }>
                <Text> Faça seu login </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            title='Ir para Produtos' onPress={()=>
                navigation.navigate('Produtos')
            }>
                <Text>Lista de produtos</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}