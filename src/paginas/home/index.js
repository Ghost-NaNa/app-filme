import { Text, View, Image, FlatList } from "react-native";
// import { Feather } from '@expo/vector-icons';
import { Dimensions } from "react-native";

import styles from '../../../style.js'
import Cabecalho from '../../componentes/cabecalho/index.js'
import Barradepesquisa from '../../componentes/pesquisa/index.js'
import CardsFilmes from '../../componentes/cardsFilmes/index.js'
import { useState, useEffect } from "react";
import { useSharedValue } from "react-native-reanimated";


export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmRhYWRkMWVmMmE5NjFhZjUyYTViYzg0MTA0ZTM5YSIsIm5iZiI6MTc1NTAyMTQ3MS42ODQsInN1YiI6IjY4OWI4MDlmZTk5YTcwNDhhOTVlM2ZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._MW0jYilvDfbVncLHyxWJ3tzP4eE9F8iqLsvavcV5YI'
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data.results);

            setMovies(data.results);
        }

        buscarFilmes();
    }, [])

    const [series, setSeries] = useState([]);

    useEffect(() => {
        async function buscaSeries() {
            const url = 'https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmRhYWRkMWVmMmE5NjFhZjUyYTViYzg0MTA0ZTM5YSIsIm5iZiI6MTc1NTAyMTQ3MS42ODQsInN1YiI6IjY4OWI4MDlmZTk5YTcwNDhhOTVlM2ZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._MW0jYilvDfbVncLHyxWJ3tzP4eE9F8iqLsvavcV5YI'
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data.results);

            setSeries(data.results);
        }

        buscaSeries();
    }, []);
    
    const width = Dimensions.get('window').width;
    const progress = useSharedValue(0);
    
    return (
        <View style={styles.container}>

            <Cabecalho></Cabecalho>

            <Barradepesquisa></Barradepesquisa>

            <Text style={styles.textBanner}>Em Cartaz</Text>
            <Image style={styles.imageBanner} source={require('../../../imagens/totoro.jpg')} />



            <FlatList
                data={movies}
                numColumns={3}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardsFilmes 
                    titulo={item.title} 
                    nota={(item.vote_average.toFixed(1))} 
                    imagem={item.poster_path} 
                    genero={item.genero} 
                    autor={item.autor} 
                    lancamento={item.dataLancamento} 
                    sinopse={item.overview}> </CardsFilmes>
                )}
            />

            
                


        </View>
    )

}