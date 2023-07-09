import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { useLayoutEffect } from "react";

export const TuneDetails = ({ route }) => {
  const { tune } = route.params;
  const { title, artist, artwork, audio } = tune;

  const navigation = useNavigation();
  console.log(audio);

  const handlePlayAudio = async () => {
    try {
      const sound = new Audio.Sound();
      await sound.loadAsync({ uri: audio });
      await sound.playAsync();
    } catch (error) {
      console.log("Error playing audio:", error);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Go Back",
      headerStyle: {
        backgroundColor: "#282727",
      },
      headerTintColor: "white",
    });
  }, [navigation]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.artworkContainer}>
          <Image
            source={{ uri: artwork }}
            defaultSource={require("../assets/fallback-img.jpg")}
            style={styles.artwork}
          />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePlayAudio}>
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGoBack}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282727",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    backgroundColor: "#504f4f",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  artworkContainer: {
    marginBottom: 20,
  },
  artwork: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  artist: {
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
