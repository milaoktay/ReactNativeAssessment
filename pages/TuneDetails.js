import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Audio } from "expo-av";

// Mapping object for audio file paths based on ID
const audioFilePaths = {
  1: require("../assets/audio/Lite Saturation - Nostalgia.mp3"),
  2: require("../assets/audio/Axel Lundstrom - Measure by measure.mp3"),
  // Add more audio file paths for different IDs as needed
};

export const TuneDetails = ({ route }) => {
  const { tune } = route.params;
  const { id, title, artist, artwork, audio } = tune;

  const navigation = useNavigation();
  const soundRef = useRef(null);

  const handlePlayAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(audioFilePaths[id]);
      soundRef.current = sound;
      await sound.playAsync();
    } catch (error) {
      console.log("Error playing audio:", error);
    }
  };

  const handlePauseAudio = async () => {
    if (soundRef.current) {
      try {
        await soundRef.current.pauseAsync();
      } catch (error) {
        console.log("Error pausing audio:", error);
      }
    }
  };

  //Top bar (go back arrow)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "#282727",
      },
      headerTintColor: "white",
    });
  }, [navigation]);

  //Pause audio on exit
  useFocusEffect(() => {
    return () => {
      handlePauseAudio();
    };
  });

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
          <TouchableOpacity style={styles.button} onPress={handlePauseAudio}>
            <Text style={styles.buttonText}>Pause</Text>
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
    width: "90%",
    backgroundColor: "#504f4f",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  artworkContainer: {
    marginBottom: 20,
  },
  artwork: {
    width: 300,
    height: 300,
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
    backgroundColor: "#282727",
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
