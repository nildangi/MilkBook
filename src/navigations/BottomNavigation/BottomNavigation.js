import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import OrderList from './OrderList';
import Payment from './Payment';
import Profile from './Profile';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from '../StackNavigation/StackNavigation'
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#04C6F1', // Color of the active tab icon and label
          inactiveTintColor: 'gray', // Color of the inactive tab icon and label
          style: {
            backgroundColor: 'lightgray', // Background color of the tab bar
          },
          labelStyle: {
            fontSize: 10, // Adjust the font size of the tab label
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle:'Dashboard',
            headerTitleAlign: 'center',
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: '#04C6F1',
            },
            headerTintColor: '#FFFFFF',
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                <Image
                  style={[styles.tabIcon, focused && styles.focusedIcon]}
                  source={require('../../assest/icon/icon.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="OrderList"
          component={OrderList}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                <Image
                  style={[styles.tabIcon, focused && styles.focusedIcon]}
                  source={require('../../assest/icon/icon-3.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={Payment}
          options={{
            headerShown: false,
          tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                <Image
                  style={[styles.tabIcon, focused && styles.focusedIcon]}
                  source={require('../../assest/icon/icon-2.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconContainer}>
                <Image
                  style={[styles.tabIcon, focused && styles.focusedIcon]}
                  source={require('../../assest/icon/icon-4.png')}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  focusedIcon: {
    tintColor: '#04C6F1', // Tint color for the focused icon
  },
});

export default BottomNavigation;
