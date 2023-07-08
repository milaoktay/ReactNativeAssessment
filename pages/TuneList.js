import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SingleTuneFromList } from "../components/SingleTuneFromList";
import { useLayoutEffect } from "react";

import ringtonesData from "../assets/ringtones.json"; // Import the JSON data

export const TuneList = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.listContainer}>
            {ringtonesData.map((item) => (
              <View key={item.id}>
                <SingleTuneFromList
                  tune={item}
                  onPress={() =>
                    navigation.navigate("TuneDetails", { tune: item })
                  }
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkcrimson",
  },
  listContainer: {
    paddingVertical: 16,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#333",
  },
  icon: {
    color: "white",
    fontSize: 18,
  },
});
