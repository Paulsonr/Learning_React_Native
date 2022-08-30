import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notes</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder=" Type your notes..." style={styles.textInput} />
        <Button title="Add" />
      </View>
      <View style={styles.notesContainer}>
        <Text>List of Notes ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccccc",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#eee",
    padding: 10,
    flex: 1,
    borderRadius: 4,
  },
  notesContainer: {
    flex: 8,
  },
});
