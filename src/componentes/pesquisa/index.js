import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import estilo from './style.js';

export default function Barradepesquisa() {

    const [pesquisa, setPesquisa] = useState('');

    const navigation = useNavigation();

    function testar() {
        console.log('pesquisa:', pesquisa);
    }


    return (

        <View style={estilo.containerSearch}>

            <TextInput
                onChangeText={(texto) => setPesquisa(texto)}
                style={estilo.inputSearch}
                placeholder="Digite o filme que deseja buscar"
            />
            <TouchableOpacity onPress={()=>{navigation.navigate('pesquisa', {pesquisa})}} style={{ position: 'absolute', right: 10, top: 10 }}>
                <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>


        </View>
    )
}