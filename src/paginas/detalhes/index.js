import { View, Text, TouchableOpacity, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import estilo from "./style.js";

export default function Detalhes() {

    const route = useRoute();

    return (
        <View>
            <Text style = {estilo.titulo}> {route.params.titulo} </Text>
            <View>
                <Image source={route.params.imagem}></Image>

                <View>
                    { /* genêro */ }
                    <Text>triste</Text>

                    { /* ano lançamento */}
                    <Text> ontem  </Text>

                    { /* autor */ }
                    <Text> eu </Text>

                    { /* nota */}
                    <Text> maior q 3 </Text>
                </View>

            </View>
        </View>
    )

}