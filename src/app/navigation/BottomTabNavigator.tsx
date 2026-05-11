import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../features/home/screens/HomeScreen';
import CartScreen from '../../features/cart/screens/CartScreen';
import ProfileScreen from '../../features/auth/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size, focused }) => {
          const iconName = getIconName(route.name, focused)

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
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const getIconName = (routeName: String, focused: boolean) => {
  switch(routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Categories':
      return focused ? 'grid' : 'grid-outline';
    case 'Cart':
      return focused ? 'cart' : 'cart-outline';
    case 'Profile':
      return focused ? 'person' : 'person-outline';
    default:
      return 'help-circle';
  }
}

export default BottomTabNavigator;