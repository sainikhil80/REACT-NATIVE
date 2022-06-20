import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function ListViewDemo() {
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
      <ScrollView>
        {employees.map((item) => {
          return (
            <View>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
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
    backgroundColor: "lightgreen",
    fontSize: 24,
  },
});
