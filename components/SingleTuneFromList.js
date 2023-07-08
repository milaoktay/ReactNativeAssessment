import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const SingleTuneFromList = ({ tune, onPress }) => {
  const { title, artist, artwork } = tune;
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
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
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    margin: 3,
    backgroundColor: "#504f4f",
    borderRadius: 4,
    height: 100,
  },
  artworkContainer: {
    marginRight: 8,
  },
  artwork: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#faf6f6",
    marginBottom: 4,
  },
  artist: {
    fontSize: 12,
    color: "#faf6f6",
  },
});
