import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { TuneList } from "../pages/TuneList";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Top 100" component={TuneList} />
      <Tab.Screen name="Top 10" component={TuneList} />
    </Tab.Navigator>
  </NavigationContainer>
);
