import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function FlatListDemo() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Mark", gender: "Male" },
    { id: 2, name: "Paul", gender: "Male" },
    { id: 1, name: "Watson", gender: "Male" },
    { id: 4, name: "Stacy", gender: "Female" },
    { id: 5, name: "Shawn", gender: "Male" },
    { id: 1, name: "Watson", gender: "Male" },
    { id: 4, name: "Stacy", gender: "Female" },
    { id: 5, name: "Shawn", gender: "Male" },
  ]);

  return (
    <View style={styles.container}>
        <FlatList 
        numColumns={2}
            data={ employees }
            renderItem = { ({item}) =>(
                <Text style={ styles.item }>{ item.name }</Text>
            ) }
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
