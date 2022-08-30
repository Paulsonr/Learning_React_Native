import { StyleSheet, View, Button, TextInput } from "react-native";

export default function NotesInput({
  onInputHandler,
  onAddNotesHandler,
  onEmptyNotesHandler,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder=" Type your notes..."
        style={styles.textInput}
        onChangeText={onInputHandler}
      />
      <Button title="Add" onPress={onAddNotesHandler} />
      <Button title="Empty" onPress={onEmptyNotesHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  textInput: {
    backgroundColor: "#eee",
    padding: 10,
    flex: 1,
    borderRadius: 4,
  },
});
