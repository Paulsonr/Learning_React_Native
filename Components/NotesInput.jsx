import { StyleSheet, View, TextInput } from "react-native";
import { IconButton } from "react-native-paper";

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
      <View style={styles.inputActionsContainer}>
        <IconButton
          icon="plus"
          iconColor="red"
          size={20}
          onPress={onAddNotesHandler}
        />
        <IconButton
          icon="delete"
          iconColor="red"
          size={20}
          onPress={onEmptyNotesHandler}
        />
        {/* <Pressable style={styles.button} onPress={onEmptyNotesHandler}>
          <Text style={styles.btn_text}>{"Empty"}</Text>
        </Pressable> */}
        {/* <Button title="Add" onPress={onAddNotesHandler} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  textInput: {
    flex: 2,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 4,
    marginRight: 10,
  },
  inputActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
    marginRight: 5,
  },
  btn_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
