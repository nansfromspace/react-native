import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    safe:{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#442F70'
    },
    titulo: {
        color: 'white',
        fontSize: 25,
        marginTop: 20
    },
    inputEmail: {
        backgroundColor: 'white',
        width: '70%',
        marginTop: 10,
        padding: 3,
        borderRadius: 15,
        textAlign: 'center',
    },
    inputSenha: {
        backgroundColor: 'white',
        width: '70%',
        marginTop: 10,
        padding: 3,
        borderRadius: 15,
        textAlign: 'center',
        },


    btn:{
        backgroundColor: '#E69F33', 
        width: 160,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        margin: 5,
        textAlign: 'center'
    },
    img: {
        height: '30%',
        width: '30%',
        margin: 10
    }
})

export default styles;