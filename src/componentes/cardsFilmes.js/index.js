import { Image, Text, TouchableOpacity, FlatList } from "react-native";
import DATA from "../../../movies.js";
import estiloCard from "./estiloCards.js";

export default function CardsFilmes() {

    return (
        <FlatList
            data={DATA}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={estiloCard.containerFilmes}>
                    <Image source={item.image} style={estiloCard.images} />
                    <Text style={estiloCard.titulo}> {item.nome} </Text>
                    <Text style={estiloCard.textNota}> Nota: {item.nota} </Text>
                </TouchableOpacity>
            )}
        />
    )
r
}