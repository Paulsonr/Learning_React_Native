import { StyleSheet, View, FlatList } from "react-native";
import Note from "./Note";

export default function NotesContainer({ notes, onDeleteSingleNote }) {
  return (
    <View style={styles.notesContainer}>
      <FlatList
        data={notes}
        renderItem={(item) => {
          return <Note item={item} onDeleteSingleNote={onDeleteSingleNote} />;
        }}
        keyExtractor={(item, index) => {
          return item + index + "_key";
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  notesContainer: {
    flex: 8,
  },
});
