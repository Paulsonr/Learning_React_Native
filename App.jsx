import { View } from "react-native";
import Notes from "./Pages/Notes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Notes />
    </>
  );
}
