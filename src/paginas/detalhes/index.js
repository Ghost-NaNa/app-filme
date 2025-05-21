import { View, Text, TouchableOpacity, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import estilo from "./style.js";

export default function Detalhes() {

    const route = useRoute();

    return (
        <View>
            <Text style = {estilo.titulo}> {route.params.titulo} </Text>
            <View>
                <Image source={route.params.imagem}>
            </Image>
            <Text>Nota: {route.params.nota}</Text>
            </View>
        </View>
    )

}