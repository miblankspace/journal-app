import Header from "../components/Header";
import { Text, View } from "react-native";
import Calendar from "./calendar";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <ThemedText>body</ThemedText>
    </View>
  );
}
