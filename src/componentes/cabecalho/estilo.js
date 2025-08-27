import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native'

const largura = Dimensions.get('screen').width
const styles = StyleSheet.create({

    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: largura - 20,
        marginBottom: 10,
      },
      textHeader: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
      },
}
)
export default styles