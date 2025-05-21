import { Image, Text, TouchableOpacity, FlatList } from "react-native";
import DATA from "../../../movies.js";
import { useNavigation } from "@react-navigation/native";
import estiloCard from "./estiloCards.js";

export default function CardsFilmes({ titulo, nota, imagem }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={estiloCard.containerFilmes} onPress={() => navigation.navigate("Detalhes", { titulo, nota, imagem })}>
            <Image source={imagem} style={estiloCard.images} />
            <Text style={estiloCard.titulo}> {titulo} </Text>
            <Text style={estiloCard.textNota}> Avaliação no IMDB: {nota} </Text>
        </TouchableOpacity>
    )
}