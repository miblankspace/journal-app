import { View, Text, Button } from "react-native";
import { useFonts } from "expo-font";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

export default function Header() {
  const getFormattedDate = (date = new Date()): string => {
    return date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
      .replace(",", "");
  };
  const today = getFormattedDate();
  return (
    <View style={{borderColor:"yellow"}}>
      <ThemedText variant="heading">header: heading</ThemedText>
      <ThemedText variant="subheading">header: subheading</ThemedText>
      <ThemedText>header: default</ThemedText>
    </View>
  );
}
