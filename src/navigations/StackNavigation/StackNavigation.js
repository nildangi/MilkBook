import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import Society from '../Dashboard/Society'

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="Society" component={Society} />
        </Stack.Navigator>
    );
}
export default MyStack;
