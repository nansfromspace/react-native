import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Lista from './FlatList';
import styles from './styles'
import Logo from '../../assets/FSE.png'


export default function Home({navigation}){

    return(
        <ScrollView>
        <View style={styles.safe}>
                <Image source={Logo} style={styles.img}/>
            
            <TouchableOpacity style={styles.btn}
            title='Ir para Sobre' onPress={()=>
                navigation.navigate('Login')
            }>
                <Text> Faça seu login </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            title='Ir para Produtos' onPress={()=>
                navigation.navigate('Home')
            }>
                <Text>Home</Text>
            </TouchableOpacity>
            <Text style={styles.titulo} >Nossos produtos:</Text>
            <Lista />
        </View>
        </ScrollView>
    )
}