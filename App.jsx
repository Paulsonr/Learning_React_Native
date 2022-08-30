import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  const onInputHandler = (enteredText) => {
    setInputNote(enteredText);
  };

  const onAddNotesHandler = () => {
    let tempArray = [...notes];
    let tempText = inputNote.trim();
    if (tempText !== "" && tempText.length > 0) {
      tempArray.push(tempText);
      setNotes(tempArray);
    }
  };
  const onEmptyNotesHandler = () => {
    setNotes([]);
  };
  const onDeleteSingleNote = (index) => {
    let tempArray = [...notes];
    tempArray.splice(index, 1);
    setNotes(tempArray);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notes</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder=" Type your notes..."
          style={styles.textInput}
          onChangeText={onInputHandler}
        />
        <Button title="Add" onPress={onAddNotesHandler} />
        <Button title="Empty" onPress={onEmptyNotesHandler} />
      </View>
      <View style={styles.notesContainer}>
        <ScrollView>
          {notes.map((note, index) => (
            <View style={styles.noteContainer}>
              <Text style={styles.noteText}>{note}</Text>
              {/* <Button title="Delete" /> */}
              <IconButton
                icon="delete"
                iconColor="red"
                size={20}
                onPress={() => onDeleteSingleNote(index)}
              />
            </View>
          ))}
        </ScrollView>
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
  noteContainer: {
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  noteText: {
    fontWeight: "bold",
    flex: 1,
  },
});
