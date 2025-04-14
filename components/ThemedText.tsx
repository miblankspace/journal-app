import { Text, type TextProps, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  variant?: "default" | "heading" | "subheading";
};

export function ThemedText({
  style,
  variant = "default",
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  useFonts({
    SingleDay: require("../assets/fonts/SingleDay-Regular.ttf"),
  });
  return (
    <Text
      style={[{ fontFamily: "SingleDay" }, styles[variant], style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 24,
    lineHeight: 30,
  },
  heading: {
    fontSize: 48,
    lineHeight: 52,

    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 3,

    // Android
    elevation: 6,
  },
  subheading: {
    fontSize: 34,
    lineHeight: 36,
  },
  // link: {
  //   lineHeight: 30,
  //   fontSize: 16,
  //   color: "#0a7ea4",
  // },
});
