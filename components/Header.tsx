import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const getFormattedDate = (date = new Date()): string => {
    return date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .replace(",", "");
  };
  const today = getFormattedDate();
  return (
    <View
      style={{
        height: "12%",
        justifyContent: "flex-end", //space-between if settings
      }}
    >
      {/* <Pressable style={iconContainer.settingsContainer}>
        <Ionicons name="settings-outline" size={24} />
      </Pressable> */}
      <ThemedText variant="heading">{today}</ThemedText>
    </View>
  );
}
const iconContainer = StyleSheet.create({
  settingsContainer: {
    alignSelf: "flex-end",
    padding: 5,
    margin: 5,
  },
});
