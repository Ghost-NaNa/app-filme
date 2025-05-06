import { Text, View, Image } from "react-native";
// import { Feather } from '@expo/vector-icons';

import styles from '../../../style.js'
import Cabecalho from '../../componentes/cabecalho/index.js'
import Barradepesquisa from '../../componentes/pesquisa/index.js'
import CardsFilmes from '../../componentes/cardsFilmes/index.js'

export default function Home() {

    return (
        <View style={styles.container}>
        
              <Cabecalho></Cabecalho>
        
              <Barradepesquisa></Barradepesquisa>
        
              <Text style={styles.textBanner}>Em Cartaz</Text>
              <Image style={styles.imageBanner} source={require('../../../imagens/totoro.jpg')} />
              
              <CardsFilmes></CardsFilmes>
        
        
            </View>
    )

}