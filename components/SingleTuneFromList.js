import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const SingleTuneFromList = ({ tune, onPress }) => {
  const { title, artist, artworkUri, audio } = tune;
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.artworkContainer}>
          <Image source={{ uri: artworkUri }} style={styles.artwork} />
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
    padding: 8,
  },
  artworkContainer: {
    marginRight: 8,
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "crimson",
    marginBottom: 4,
  },
  artist: {
    fontSize: 14,
    color: "crimson",
  },
});
