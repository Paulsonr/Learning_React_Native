import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import NotesInput from "../Components/NotesInput";
import NotesContainer from "../Components/NotesContainer";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");
  const [notesInputModalVisible, setNotesInputModalVisible] = useState(false);

  const onInputHandler = (enteredText) => {
    setInputNote(enteredText);
  };

  const onAddNotesHandler = () => {
    let tempArray = [...notes];
    let tempText = inputNote.trim();
    if (tempText !== "" && tempText.length > 0) {
      tempArray.push(tempText);
      setNotes(tempArray);
      setInputNote("");
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

  const openNotesInputModalHandler = () => {
    setNotesInputModalVisible(true);
  };

  const closeNotesInputModalHandler = () => {
    setNotesInputModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Notes</Text>
        <IconButton
          icon="plus"
          iconColor="red"
          size={20}
          title="Add Notes"
          onPress={openNotesInputModalHandler}
        />
      </View>
      <NotesInput
        inputNote={inputNote}
        onInputHandler={onInputHandler}
        onAddNotesHandler={onAddNotesHandler}
        onEmptyNotesHandler={onEmptyNotesHandler}
        notesInputModalVisible={notesInputModalVisible}
        closeNotesInputModalHandler={closeNotesInputModalHandler}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
