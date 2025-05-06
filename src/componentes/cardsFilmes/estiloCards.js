import { StyleSheet, Dimensions } from "react-native";

// pra adaptar o container pra 3 colunas
// desse jeito cada card ocupa 1/3 da tela
const largura = Dimensions.get('window').width / 3

const estiloCard = StyleSheet.create({
    containerFilmes: {
        paddingTop: 20,
        paddingBottom: 16,
        paddingRight: 8,
        paddingLeft: 8,
        alignItems: 'center',
        width: largura,
        height: 'auto',
    },
    titulo: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        paddingTop: 8
    },
    textNota:{
        fontSize: 12,
        color: '#fff',
        paddingLeft: 4
    },
    images: {
        width: '100%',
        height: 190,
        borderRadius: 8,
    }
})

export default estiloCard;