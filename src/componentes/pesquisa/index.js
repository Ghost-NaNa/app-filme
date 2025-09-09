import { TextInput, View, TouchableOpacity } from "react-native-web";
import styles from "./style.js";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Pesquisa() {


    const [pesquisa, setPesquisa] = useState('');

    const navigation = useNavigation();

    function testar() {
        console.log('pesquisa:', pesquisa);
    }


    return (
        <View style={styles.viewSearch}>
            <TextInput
                onChangeText={(texto) => setPesquisa(texto)}
                style={styles.inputSearch}
                placeholder="Digite o filme que deseja buscar"
                placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={() => { navigation.navigate('pesquisa', { pesquisa }) }} style={{ position: 'absolute', right: 10, top: 10 }}>
                <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>)

}