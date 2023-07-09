import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { BottomTabNavigator } from "./components/BottomBar";
import { TuneList } from "./pages/TuneList";
import { TuneDetails } from "./pages/TuneDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Stack.Navigator>
          <Stack.Screen name="TuneList" component={TuneList} />
          <Stack.Screen name="TuneDetails" component={TuneDetails} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282727",
    padding: 5,
  },
});
