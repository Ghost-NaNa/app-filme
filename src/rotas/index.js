// arquivos responsável por gerenciar a navegação do projeto :D
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../paginas/home";
import Detalhes from "../paginas/detalhes";

export default function Rotas() {

    const stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="Detalhes" component={Detalhes}>
                    
                </stack.Screen>
            </stack.Navigator>

        </NavigationContainer>
    )
}