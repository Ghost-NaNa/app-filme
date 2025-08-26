// arquivos responsável por gerenciar a navegação do projeto :D
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PesquisaFilmes from "../paginas/pesquisa";
import Home from "../paginas/home";
import Detalhes from "../paginas/detalhes";

export default function Rotas() {

    const stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={Home} options={
                    {headerShown: false}
                } />
                <stack.Screen name="Detalhes" component={Detalhes}/>
                <stack.Screen name = "pesquisa" component={PesquisaFilmes}/>

            </stack.Navigator>

        </NavigationContainer>
    )
}