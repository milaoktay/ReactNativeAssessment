import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { useLayoutEffect } from "react";

export const TuneDetails = ({ route }) => {
  const { tune } = route.params;
  const { title, artist, artwork, audio } = tune;

  const navigation = useNavigation();
  const sound = new Audio.Sound();

  const handlePlayAudio = async () => {
    try {
      await sound.loadAsync({ uri: audio });
      await sound.playAsync();
    } catch (error) {
      console.log("Error playing audio:", error);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Go Back", // Set the title to the tune title
    });
  }, [navigation, title]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.artworkContainer}>
        <Image
          source={{ uri: artwork }}
          defaultSource={require("../assets/fallback-img.jpg")}
          style={styles.artwork}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.artist}>{artist}</Text>
        <Button title="Play" onPress={handlePlayAudio} />
        <Button title="Go Back" onPress={handleGoBack} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  artworkContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  artwork: {
    width: 200,
    height: 200,
  },
  detailsContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  artist: {
    fontSize: 16,
  },
});
