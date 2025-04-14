import Header from "../components/Header";
import { SafeAreaView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    //borderWidth: 2, borderColor: "yellow",
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Header />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}
