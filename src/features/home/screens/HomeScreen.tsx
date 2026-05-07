import * as React from 'react';

import { NewAppScreen } from "@react-native/new-app-screen";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import BottomNavigator from '../../../shared/component/BottomNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TABS = createBottomTabNavigator

function HomeScreen() {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.redColorText}>
        Home Screen
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptas doloremque officia nobis aut! Quibusdam facere odit expedita, 
        excepturi praesentium accusamus officiis officia temporibus minima ut, 
        eum molestias non repudiandae mollitia.
      </Text>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redColorText: {
    color: 'red',
  },
});

export default HomeScreen;