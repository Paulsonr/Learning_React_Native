import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function Note({ item, onDeleteSingleNote }) {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteText}>{item.item}</Text>
      <IconButton
        icon="delete"
        iconColor="red"
        size={20}
        onPress={() => onDeleteSingleNote(item.index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 15,
  },
  noteText: {
    fontWeight: "bold",
    flex: 1,
  },
});
