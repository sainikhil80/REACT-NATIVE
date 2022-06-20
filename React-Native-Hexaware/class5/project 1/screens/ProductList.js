import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getProducts } from "../services/ProductsService";
 import Product from "../components/Product";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  function renderProduct({ item: product }) {
    return <Product {...product} onPress={() => {}} />;
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
