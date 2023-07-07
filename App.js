import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomTabNavigator } from "./components/BottomBar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <BottomTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
