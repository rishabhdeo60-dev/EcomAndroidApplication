// src/features/home/components/ProductCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  price: string;
};

const ProductCard = ({ name, price }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 15,

    elevation: 3,
  },

  imagePlaceholder: {
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  price: {
    marginTop: 5,
    fontSize: 16,
    color: 'green',
  },
});