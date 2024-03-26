import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Registers from '../screens/Register';
import NewUser from '../screens/NewUser';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
