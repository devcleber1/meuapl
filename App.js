import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const maxCapacity = 10; // Defina a capacidade máxima do restaurante

  const handleAdd = () => {
    if (count < maxCapacity) {
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pessoas no restaurante:</Text>

      <Text style={styles.count}>{count}</Text>

      {count >= maxCapacity && (
        <Text style={styles.fullMessage}>Restaurante cheio!</Text>
      )}

      <View style={styles.btnContainer}>
        <Button title="Adicionar" onPress={handleAdd} color="#eb6314" />
        <Button title="Remover" onPress={handleRemove} color="#121212" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#121212",
  },
  count: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: "#121212",
    color: "#FFF",
    padding: 14,
    borderRadius: 8,
  },
  fullMessage: {
    fontSize: 18,
    color: "red",
    marginTop: 10,
    fontWeight: "bold",
  },
  btnContainer: {
    marginTop: 30,
    flexDirection: "row",
    gap: 25,
  },
});
