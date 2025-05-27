import { StyleSheet } from "react-native";


const estilo = StyleSheet.create(
    {
        container: {
            backgroundColor: '#141a29',
            height: '100%'
        },

        titulo: {
            fontSize: 25,
            textAlign: 'center',
            padding: '8px',
            color: 'white'
        },
        imageContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 10,
            padding: '16px'
        },
        image: {
            width: 150,
            height: 220,
            borderRadius: 6,
            marginBottom: 10,
            marginLeft: 30
        },
        detalhes: {
            marginRight: 40,
            padding: '16px',
            borderRadius: 8,
            width: '43%',
            height: 220,
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 13,
            color: 'white',
            backgroundColor: '#2B2242'
        },
        detalhesTexto: {
            color: 'white'
        },
        containerSinopse: {
            backgroundColor: '#141a29',
            padding: 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#2B2242',
            marginLeft: 16,
            marginRight: 16,
            borderRadius: 8
        }
    }
)

export default estilo;