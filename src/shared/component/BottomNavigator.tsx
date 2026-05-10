import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../features/home/screens/HomeScreen';
import CartScreen from '../../features/cart/screens/CartScreen';
import ProfileScreen from '../../features/auth/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const styles = {
  bottomTabNavigator: {
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
  },
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: styles.bottomTabNavigator,

        tabBarLabelStyle: styles.tabBarLabelStyle,

        tabBarIcon: ({ color, size, focused }) => {
          const iconName = getIconName(route.name, focused);

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

const getIconName = (routeName: string, focused: boolean) => {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Cart':
      return focused ? 'cart' : 'cart-outline';
    case 'Profile':
      return focused ? 'person' : 'person-outline';
    case 'Categories':
      return focused ? 'grid' : 'grid-outline';
    default:
      return 'help-circle';
  }
};

export default BottomTabNavigator;