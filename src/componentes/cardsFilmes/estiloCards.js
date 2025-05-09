import { StyleSheet, Dimensions, Appearance} from "react-native";

// pra adaptar o container pra 3 colunas
// desse jeito cada card ocupa 1/3 da tela

import cores from "../../../style.js"



const largura = Dimensions.get('window').width / 3




let estiloCard = StyleSheet.create({
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
        color: cores.corTitulo,
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

// if (esquemaCor === 'dark'){
//     estiloCard.titulo.color = 'red'
// }

export default estiloCard;