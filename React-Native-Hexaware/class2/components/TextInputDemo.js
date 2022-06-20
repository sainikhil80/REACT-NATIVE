import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function TextInputDemo() {
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("guest@gmail.com");

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. Mark"
        keyboardType="numeric"
        onChangeText={(e) => setName(e)}
      />

      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. m@gmail.com"
        onChangeText={(e) => setEmail(e)}
      />

      <Text>
        name: {name}, email: {email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
