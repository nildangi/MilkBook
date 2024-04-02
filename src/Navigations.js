import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Registers from './screens/Register';
import NewUser from './screens/NewUser';
import { LogBox } from 'react-native';
import Login from './screens/Login';
import BottomNavigation from './navigations/BottomNavigation/BottomNavigation';
import Otp from './screens/Otp';
import Society from './navigations/Dashboard/Society'
import StackNavigation from '../src/navigations/StackNavigation/StackNavigation'
import Home from './navigations/BottomNavigation/Home';
import OrderDetails from './navigations/Dashboard/OrderDetails'
import SocietyDetails from './navigations/Dashboard/SocietyDetails';
import DeliveredMilk from './navigations/Dashboard/DeliveredMilk';
import PaymentDetails from '../src/navigations/Dashboard/PaymentDetails'
import MilkDetailsCard from './navigations/Dashboard/MilkDetailsCard';
import MonthalyBill from './navigations/Dashboard/MonthalyBill';
import AddCustomer from './navigations/Dashboard/AddCustomer';
const Stack = createNativeStackNavigator();

const Navigations = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []); // Run once when component mounts

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showSplashScreen ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : null}
        <Stack.Screen name="Registers" component={Registers} />
        <Stack.Screen name="NewUser" component={NewUser} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Society" component={Society} />
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DeliveredMilk" component={DeliveredMilk} />
        <Stack.Screen name="SocietyDetails" component={SocietyDetails} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="MilkDetailsCard" component={MilkDetailsCard} />
        <Stack.Screen name="MonthalyBill" component={MonthalyBill} />
        <Stack.Screen name="AddCustomer" component={AddCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
