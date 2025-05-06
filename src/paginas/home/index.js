import { Text, View, Image, FlatList } from "react-native";
// import { Feather } from '@expo/vector-icons';

import styles from '../../../style.js'
import Cabecalho from '../../componentes/cabecalho/index.js'
import Barradepesquisa from '../../componentes/pesquisa/index.js'
import CardsFilmes from '../../componentes/cardsFilmes/index.js'
import DATA from "../../../movies.js";

export default function Home() {

    return (
        <View style={styles.container}>
        
              <Cabecalho></Cabecalho>
        
              <Barradepesquisa></Barradepesquisa>
        
              <Text style={styles.textBanner}>Em Cartaz</Text>
              <Image style={styles.imageBanner} source={require('../../../imagens/totoro.jpg')} />



              <FlatList
            data={DATA}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              
                <CardsFilmes titulo ={ item.nome} nota = {item.nota} imagem = {item.image}> </CardsFilmes>
            )}
        />
              
             
        
        
            </View>
    )

}