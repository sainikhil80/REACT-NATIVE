import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductList from "./screens/ProductList";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({});
