import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NotesInput from "../Components/NotesInput";
import NotesContainer from "../Components/NotesContainer";

export default function Notes() {
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
      <NotesInput
        onInputHandler={onInputHandler}
        onAddNotesHandler={onAddNotesHandler}
        onEmptyNotesHandler={onEmptyNotesHandler}
      />
      <NotesContainer notes={notes} onDeleteSingleNote={onDeleteSingleNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccccc",
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
});
