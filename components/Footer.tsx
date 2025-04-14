import { View, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View
      style={{
        height: "8%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Pressable
        style={iconContainer.calendarContainer}
        onPress={() => console.log("hi!")}
      >
        <Ionicons name="calendar-clear-outline" size={36} />
      </Pressable>
      <Pressable
        style={iconContainer.addContainer}
        onPress={() => console.log("bye!")}
      >
        <Ionicons name="add-circle-outline" size={42} />
      </Pressable>
    </View>
  );
}

const iconContainer = StyleSheet.create({
  addContainer: {
    marginRight: 10,
  },
  calendarContainer: {
    marginLeft: 10,
  },
});
