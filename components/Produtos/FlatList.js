import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const produtos=[
    {
        id: '001',
        categora:['geladeira'],
        preco: ['5019'],
        des:['Geladeira Frost Free Brastemp Side Inverse 540 litros']
    },
    {
        id: '002',
        categora:['geladeira'],
        preco: ['1039'],
        des: ['Geladeira Frost Free Brastemp Branca 373 litros']
    },
    {
        id: '003',
        categora:['geladeira'],
        preco: ['1839'],
        des: ['Geladeira Frost Free Consul Prata 340 litros']
    },
    {
        id: '004',
        categora:['geladeira'],
        preco: ['2039'],
        des: ['Geladeira Frost Free Consul Prata 570 litros']
    },
    {
        id: '005',
        categora:['fogao'],
        preco: ['539'],
        des: ['Fogão de Piso 4 Bocas Atlas Monaco com acendimento Automático']
    },
    {
        id: '006',
        categora:['microondas'],
        preco: ['468'],
        des: ['Microondas 25l Espelhado Philco 220V']
    },
    {
        id: '007',
        categora:['microondas'],
        preco: ['600'],
        des: ['Forno de Microondas Electrolux 20l Branco']
    },
    {
        id: '008',
        categora:['lavaroupas'],
        preco: ['2039'],
        des: ['Máquina de Lavar Roupas Philco Inverter 12kg']
    },
    {
        id: '009',
        categora:['lavaroupas'],
        preco: ['947'],
        des: ['Lava-loucas Electrolux Inox com Painel Bluetouch']
    },
    {
        id: '010',
        categora:['lavaloucas'],
        preco: ['1738'],
        des: ['Lava-loucas Compacta 08 servicos Branca 127V Brastemp']
    },
]


export default function(){
    return(
        <View>
            <FlatList 
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({item})=>
                <View style={estilos.item} >
                <Text style={estilos.prod} >{item.des[0]} </Text>
                <Text style={estilos.prod}>Preço: R$ {item.preco[0]}.00</Text>
                </View>} 
            />

        </View>
    )
}

const estilos =  StyleSheet.create({
    item:{
        backgroundColor: '#E69F33',
        padding: 15,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10,
        width: 300,
    },
    prod:{
        textAlign: 'center'
    }
})