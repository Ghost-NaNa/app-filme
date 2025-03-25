import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import styles from './estilos/main.js';

export default function App() {
  const img = Math.floor(Math.random() * 14 + 1);
  console.log(img)
  return (
    <View style={styles.container}>
      {/*começo cabeçalho*/} 
      <View style={styles.viewHeader}>
          <TouchableOpacity>
              <Feather style={{marginLeft: -70}} name='menu' size={36} color={'#fff'}/>
          </TouchableOpacity>
          <Text style = {styles.textHeader}>  TEC FILMES  </Text>
      </View>
      {/* FIM CABEÇALHO */}

      {/* inicio barra de pesquisa */}
      <View style = {styles.containerSearch}>
        <TextInput style = {styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
      </View>
      {/* inicio barra de pesquisa */}

      {/* inicio banner */}

      <Text style = {styles.textBanner}>  Em cartaz </Text>
      <Image style={styles.imageBanner} source={require(`./assets/imagens/1.jpg`)} />
      <Image style={styles.imageBanner} source={require(`./assets/imagens/2.jpg`)} />
      <Image style={styles.imageBanner} source={require(`./assets/imagens/3.jpg`)} />
      <Image style={styles.imageBanner} source={require(`./assets/imagens/4.jpg`)} />
    </View>
  );
}