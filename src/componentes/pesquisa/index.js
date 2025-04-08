import { TextInput, View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import estilo from './style.js';

export default function Barradepesquisa() {
    return( <View style={estilo.containerSearch}>

        <TextInput
            style={estilo.inputSearch}
            placeholder="Digite o filme que deseja buscar"
        />

    </View>
    )
}