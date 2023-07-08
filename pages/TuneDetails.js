import { StyleSheet, Text, View, Image } from "react-native";

export const TuneDetails = ({ tune, onPress }) => {
  const { title, artist, artwork, audio } = tune;

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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
