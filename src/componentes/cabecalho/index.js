import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './estilo.js';

export default function Cabecalho() {
    return (

            <View style={styles.viewHeader}>
                <TouchableOpacity>
                    <Feather name='menu' size={36} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}> Filmes </Text>
            </View>

    );
}