import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { BottomTabNavigator } from "./components/BottomBar";
import { TuneList } from "./pages/TuneList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" color="white" />

      <TuneList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    height: "5%", // Adjust the height as needed
    width: "100%",
    backgroundColor: "black",
    color: "black",
  },
  content: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
