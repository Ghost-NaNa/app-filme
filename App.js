import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from './style';
import DATA from './movies';
import Cabecalho from './src/componentes/cabecalho/index.js';
import Barradepesquisa  from './src/componentes/pesquisa/index.js';
import CardsFilmes from './src/componentes/cardsFilmes.js/index.js';

export default function App() {

  return (
    <View style={styles.container}>

      <Cabecalho></Cabecalho>

      <Barradepesquisa></Barradepesquisa>

      <Text style={styles.textBanner}>Em Cartaz</Text>
      <Image style={styles.imageBanner} source={require('./imagens/totoro.jpg')} />
      
      <CardsFilmes></CardsFilmes>
    </View>
  );
}
