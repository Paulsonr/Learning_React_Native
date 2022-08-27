import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue", fontWeight: "bold" }}>
        Hello World 878!
      </Text>
      <Text style={styles.text}>Hello World 878!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontWeight: "bold",
  },
});
