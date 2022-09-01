import { StyleSheet, Text, View, Pressable } from "react-native";
import { IconButton } from "react-native-paper";

export default function Note({ item, onDeleteSingleNote }) {
  return (
    <View style={styles.noteContainer}>
      <Pressable
        // android_ripple={{ color: "black" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.innerView}>
          <Text style={styles.noteText}>{item.item}</Text>
          <IconButton
            icon="delete"
            iconColor="red"
            size={20}
            onPress={() => onDeleteSingleNote(item.index)}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#eee",
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  noteText: {
    fontWeight: "bold",
    flex: 1,
  },
  pressedItem: {
    opacity: 0.3,
  },
});
