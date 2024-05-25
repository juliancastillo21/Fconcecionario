import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Offerts from '../Screens/Offerts';
import Shopping from '../Screens/Shopping';
import VehicleCredit from '../Screens/VehicleCredit';
import VehicleInsurance from '../Screens/VehicleInsurance';
import FirebaseState from '../../context/firebase/firebaseState';
import PedidoState from '../../context/pedido/pedidoState';
import Resumen from '../Screens/Resumen';


const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <FirebaseState>
            <PedidoState>
                <Tab.Navigator>
                    <Tab.Screen name='Home' component={Home} />
                    <Tab.Screen name='Ofertas' component={Offerts} />
                    <Tab.Screen name='Compras' component={Shopping} />
                    <Tab.Screen name='Resumen' component={Resumen} />
                    <Tab.Screen name='Creditos' component={VehicleCredit} />
                    <Tab.Screen name='Seguros' component={VehicleInsurance} />
                </Tab.Navigator>
            </PedidoState>
        </FirebaseState>
    )
}

export default AppNavigation