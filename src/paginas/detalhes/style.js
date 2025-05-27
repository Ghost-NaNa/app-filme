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
            width: '43%',
            height: '90%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 13,
            color: 'white'
        },
        detalhesTexto: {
            color:'white'
        },
        containerSinopse: {
            backgroundColor: '#141a29',
            padding: 20,
            flexDirection: 'column'
        }
    }
)

export default estilo;