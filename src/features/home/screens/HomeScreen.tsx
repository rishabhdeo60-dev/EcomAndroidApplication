import * as React from 'react';

import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PRODUCTS } from '../../../shared/constants/mockData';
import Header from '../components/Header';
import ProductCard from '../../product/components/ProductCard';
import SearchBar from '../components/SearchBar';

const TABS = createBottomTabNavigator();

const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}

        ListHeaderComponent={
          <>
            <Header />
            <SearchBar />
          </>
        }

        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price.toString()}
          />
        )}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});

export default HomeScreen;