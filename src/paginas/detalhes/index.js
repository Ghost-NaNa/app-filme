import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import estilo from "./style.js";

export default function Detalhes() {

    const route = useRoute();

    console.log(route.params)

    return (
        <ScrollView style={estilo.container}>
            <Text style = {estilo.titulo}> {route.params.titulo} </Text>
            <View style={estilo.imageContainer}>
                <Image style={estilo.image} source={{uri: `https://image.tmdb.org/t/p/w500${route.params.imagem}`}}></Image>

                <View style={estilo.detalhes}>
                    { /* genêro */ }
                    <Text style={estilo.detalhesTexto}>Nome original: {route.params.nomeOriginal}</Text>

                    { /* ano lançamento */}
                    <Text style={estilo.detalhesTexto}> Data de lançamento: {route.params.lancamento}  </Text>

                    { /* autor */ }
                    <Text style={estilo.detalhesTexto}>Autor: {route.params.autor}</Text>

                    { /* nota */}
                    <Text style={estilo.detalhesTexto}>Nota: {route.params.nota}</Text>
                </View>

            </View>
            <View style={estilo.containerSinopse}>
            <Text style = {estilo.titulo}> Sinopse </Text>


                <Text style={estilo.detalhesTexto}> 
                    {route.params.sinopse}
                </Text>
            </View>
        </ScrollView>
    )

}