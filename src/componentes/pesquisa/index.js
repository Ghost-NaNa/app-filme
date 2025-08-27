import { FlatList, Text, View, ScrollView, SafeAreaView } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import CardsFilmes from "../../componentes/cardsFilmes";
export default function PesquisaFilmes() {

    const [filmes, setFilmes] = useState([]);
    useEffect(() => {

        async function buscarFilmes() {
            const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.pesquisa}&language=pt-BR&page=1&include_adult=false`;
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
            setFilmes(data.results);
        }

        buscarFilmes();
    })

    const route = useRoute();
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatList
                    data={filmes}
                    numColumns={3}
                    keyExtractor={item => item.id?.toString()}
                    renderItem={({ item }) => (
                        <CardsFilmes
                            titulo={item.title}
                            nota={item.vote_average?.toFixed(1)}
                            imagem={item.poster_path}
                            nomeOriginal={item.original_title || item.original_name}
                            autor={item.autor}
                            lancamento={item.release_date}
                            sinopse={item.overview}
                        />
                    )}
                />

            </ScrollView>
        </SafeAreaView>
    )
}
