import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { home  } from './pages/home'
import { passwords } from './pages/passwords'
import { Ionicons } from '@expo/vector-icons';

const tab = createBottomTabNavigator();

export function routes(){
    return(
        <tab.Navigator>
            <tab.Screen
            nome="home"
component={home}
options={{
    headerShown: false,
    tabBaricon: ({ focused,size,color})=> {
        if (focused){
            return <Ionicons size={size} color={color} name='lock-closed'/>

        }
        return<Ionicons size={size} color={color} name='lock-closed-outline'/>
    } 
}}
/>
        </tab.Navigator>
    )
}
